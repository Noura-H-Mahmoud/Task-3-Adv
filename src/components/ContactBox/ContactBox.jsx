import styles from './ContactBox.module.css'


export default function ContactBox({icon, para, phone }) {
    return (
        <div className={styles.contactBox}>
            <img src={icon} alt="icon" />
            <div className={styles.content}>
                {phone ?
                    <a href="tel:+10100200340">010-020-0340</a> :
                    <a href="mailto:info@villa.ca">info@villa.ca</a>
                }
                <p>{para}</p>
            </div>
        </div>
    )
}
