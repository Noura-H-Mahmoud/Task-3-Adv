import styles from './ContactUs.module.css';
import Title from '../Title/Title';
import SectionForm from '../SectionForm/SectionForm';
import HeadText from '../HeadText/HeadText';

export default function ContactUs() {
    return (
        <section id='contact' className={styles.contactUs}>
            <div className={styles.background}>
                <Title title='CONTACT US' />
                <HeadText text='Get In Touch With Our Agents' isWhite={true} />
            </div>
            <div className={styles.formLanding}>
                <SectionForm />
            </div>
        </section>
    );
}

