import styles from './SectionForm.module.css'
import ContactBox from '../ContactBox/ContactBox'
import email from '../../assets/images/email-icon.png'
import phone from '../../assets/images/phone-icon.png'
import Map from '../Map/Map'
import Form from '../Form/Form'

export default function SectionForm() {
    return (
        <section className={styles.sectionForm}>
            <div className={styles.start}>
                <Map />
                <div className={styles.contact}>
                    <ContactBox icon={phone} para='Phone Number' phone={true} />
                    <ContactBox icon={email} para='Business Email' phone={false} />
                </div>
            </div>
            <div className={styles.form}>
                <Form />
            </div>
        </section>
    )
}
