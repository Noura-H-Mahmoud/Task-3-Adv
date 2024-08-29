import styles from './InfoAppartment.module.css';
import featured from '../../assets/images/featured.jpg';
import featuredIcon from '../../assets/images/featured-icon.png';
import Card from '../Card/Card';
import icon1 from '../../assets/images/info-icon-01.png';
import icon2 from '../../assets/images/info-icon-02.png';
import icon3 from '../../assets/images/info-icon-03.png';
import icon4 from '../../assets/images/info-icon-04.png';
import Title from '../Title/Title';
import Accordion from '../Accordion/Accordion';

export default function InfoAppartment() {
  const cards = [
    {
      id: 1,
      img: icon1,
      span: '250 m2',
      para: 'Total Flat Space',
      borderBottom: '1px solid rgba(232, 232, 220, .7)',
    },
    {
      id: 2,
      img: icon2,
      span: 'Contract',
      para: 'Contract Ready',
      borderBottom: '1px solid rgba(232, 232, 220, .7)',
    },
    {
      id: 3,
      img: icon3,
      span: 'Payment',
      para: 'Payment',
      title: 'Process',
      borderBottom: '1px solid rgba(232, 232, 220, .7)',
    },
    {
      id: 4,
      img: icon4,
      span: 'Safety',
      title: 'Control',
      para: '24/7 Under',
    },
  ];

  const accordionItems = [
    {
      question: "Best useful links?",
      answer: `Get <b>the best villa </b>
      website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the 
      <a href='#'> best free CSS templates </a>
      in the world. Please tell your friends about it.`,
    },
    {
      question: "How does this work?",
      answer: "This is a brief description of how the application or service works.",
    },
    {
      question: "Why is Villa Agency the best?",
      answer: "Villa Agency stands out due to its exceptional service, competitive pricing, and a wide range of properties to choose from.",
    },
  ];

  return (
    <section className={styles.InfoAppartment}>
      <div>
        <img src={featured} alt="featured image" className={styles.mainImage} />
        <div className={styles.featuredIcon}>
          <img src={featuredIcon} alt="icon" />
        </div>
      </div>
      <div className={styles.contentInfo}>
        <div className={styles.up}>
          <Title title='FEATURED' />
          <h1>Best Appartment & Sea View</h1>
        </div>
        <Accordion items={accordionItems} />
      </div>
      <div className={styles.cardComponent}>
        <Card cards={cards} />
      </div>
    </section>
  );
}

