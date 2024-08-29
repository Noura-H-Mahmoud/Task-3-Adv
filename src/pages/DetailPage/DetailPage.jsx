import styles from './DetailPage.module.css'
import HeroShared from '../../components/HeroShared/HeroShared'
import BestDeal from '../../components/BestDeal/BestDeal'
import PropertyDetailAppartment from '../../components/PropertyDetailAppartment/PropertyDetailAppartment'

export default function DetailPage() {
  return (
    <section className={styles.detailPage}>
      <HeroShared boxHeading='HOME / SINGLE PROPERTY' Heading='SINGLE PROPERTY' />
      <PropertyDetailAppartment />
      <BestDeal />
    </section>
  )
}
