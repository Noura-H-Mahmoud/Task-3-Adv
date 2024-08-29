import styles from './ContactPage.module.css'
import HeroShared from '../../components/HeroShared/HeroShared'
import ContactUsMain from '../../components/ContactUsMain/ContactUsMain'

export default function ContactPage() {
  return (
    <section className={styles.contactPage}>
      <HeroShared boxHeading='HOME / CONTACT US' Heading='CONTACT US' />
      <ContactUsMain />
    </section>
  )
}
