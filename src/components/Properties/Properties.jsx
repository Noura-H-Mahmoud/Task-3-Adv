import styles from './Properties.module.css'
import Title from '../Title/Title'
import PropertyCards from '../PropertyCards/PropertyCards'
import HeadText from '../HeadText/HeadText'
import { faL } from '@fortawesome/free-solid-svg-icons'

export default function Properties() {

    return (
        <section id='properties' className={styles.properties}>
            <Title title='PROPERTIES' />
            <HeadText text='We Provide The Best Property You Like' isWhite={false} />
            <PropertyCards active='Show All' />
        </section>
    )
}
