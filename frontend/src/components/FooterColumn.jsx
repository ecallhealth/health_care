import React from 'react';
// import './FooterColumn.css';

function FooterColumn({ title, links }) {
  return (
    <div className="footerColumn">
      <h3 className="footerColumn__title">{title}</h3>
      <ul>
        {links?.map((link, index) => (
          <li key={index} className='links'>
            {/* eslint-disable-next-line  */}
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
