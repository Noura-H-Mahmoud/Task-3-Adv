import styles from './Properties.module.css'
import Title from '../Title/Title'
import PropertyCards from '../PropertyCards/PropertyCards'

export default function Properties() {

    return (
        <section id='properties' className={styles.properties}>
            <Title title='PROPERTIES' />
            <h1>We Provide The Best Property You Like</h1>
            <PropertyCards active='Show All'/>
        </section>
    )
}
