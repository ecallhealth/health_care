import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To ecallhealth',
  description: 'We are an online tele-medicine, clinic and pharmacy ',
  keywords:
    'medicine, clinic, pharmacy, tele-medicine, tele-consultation, online drug shop, online clinic, online pharmacy, online doctor',
};

export default Meta;
