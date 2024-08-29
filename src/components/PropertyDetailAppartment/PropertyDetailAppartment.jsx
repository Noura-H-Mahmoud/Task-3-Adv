import styles from './PropertyDetailAppartment.module.css'
import img from '../../assets/images/deal-04.jpg'
import Card from '../Card/Card'
import icon1 from '../../assets/images/info-icon-01.png';
import icon2 from '../../assets/images/info-icon-02.png';
import icon3 from '../../assets/images/info-icon-03.png';
import icon4 from '../../assets/images/info-icon-04.png';
import Accordion from '../Accordion/Accordion';

export default function PropertyDetailAppartment() {
    const cards = [
        {
            id: 1,
            img: icon1,
            span: '450 m2',
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
            answer: `Dolor <b> almesit amet </b>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            question: "How does this work?",
            answer: "This is a brief description of how the application or service works.",
        },
        {
            question: "Why is Villa the best?",
            answer: "Villa Agency stands out due to its exceptional service, competitive pricing, and a wide range of properties to choose from.",
        },
    ];
    return (
        <section className={styles.underHeroSection}>
            <div className={styles.col1}>
                <img src={img} alt="Appartment Photo" />
                <button>Appartment</button>
                <h2>24 New Street Miami, OR 24560</h2>
                <div className={styles.para}>
                    <p>
                        Get <b> the best villa agency </b>
                        HTML CSS Bootstrap Template for your company website. TemplateMo provides you the
                        <a href="#"> best free CSS templates </a>
                        in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
                    </p>
                    <p>
                        When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cardigan hoodie pop-up.
                    </p>
                </div>
                <Accordion items={accordionItems} />
            </div>
            <div className={styles.col2}>
                <Card cards={cards} />
            </div>
        </section>
    )
}
