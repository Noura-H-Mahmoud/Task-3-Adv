import styles from './ContactUsMain.module.css'
import Title from '../Title/Title'
import ContactBox from '../ContactBox/ContactBox'
import email from '../../assets/images/email-icon.png'
import phone from '../../assets/images/phone-icon.png'
import Form from '../Form/Form'
import Map from '../Map/Map'

export default function ContactUsMain() {
    return (
        <section className={styles.contactUsMain}>
            <div className={styles.contactUp}>
                <div className={styles.contactLeft}>
                    <Title title='CONTACT US' />
                    <h1>Get In Touch With Our Agents</h1>
                    <p>
                        When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.
                    </p>
                    <div className={styles.contactBox}>
                        <ContactBox icon={phone} para='Phone Number' phone={true} />
                        <ContactBox icon={email} para='Business Email' phone={false} />
                    </div>
                </div>
                <div className={styles.contactRight}>
                   <Form />
                </div>
            </div>
            <div className={styles.contactDown}>
                <Map />
            </div>
        </section>
    )
}
