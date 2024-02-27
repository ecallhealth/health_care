// import { Container, Row, Col } from 'react-bootstrap';
import React from "react";
import FooterColumn from "./FooterColumn";
import { links } from "./footerLinks";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      {/* eslint-disable-next-line  */}
      <a href="#" className="footer__backToTop">
        <p>Back to top</p>
      </a>
      <div className="footer__nav">
        {links.map((item, index) => {
          const { title, links } = item;
          return <FooterColumn key={index} title={title} links={links} />;
        })}
      </div>
      <hr />
      <div className="footer__copyright">
        <ul>
          <li>© {currentYear}, ecallhealth Inc. or its affiliates</li>
          <li>Powered by TrustServant</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
