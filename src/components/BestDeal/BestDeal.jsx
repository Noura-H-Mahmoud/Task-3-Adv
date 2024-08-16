import React from 'react'
import styles from './BestDeal.module.css'
import Title from '../Title/Title'
import Button from '../Button/Button'
import house5 from '../../assets/images/property-05.jpg'
import Card from '../Card/Card'
import ButtonVisit from '../ButtonVisit/ButtonVisit'

export default function BestDeal() {
    const cards = [
        {
            id: 1,
            span: '185 m2',
            title: 'Total Flat Space',
            borderBottom: '1px solid rgba(232, 232, 220, .7)'
        },
        {
            id: 2,
            span: '26th',
            title: 'Floor Number',
            borderBottom: '1px solid rgba(232, 232, 220, .7)'
        },
        {
            id: 3,
            span: '4',
            title: 'Number of Rooms',
            borderBottom: '1px solid rgba(232, 232, 220, .7)'
        },
        {
            id: 4,
            span: 'Yes',
            title: 'Parking Available',
            borderBottom: '1px solid rgba(232, 232, 220, .7)'
        },
        {
            id: 5,
            span: 'Bank',
            title: 'Payment Process',
        },
    ]

    return (
        <section className={styles.BestDeal}>
            <div className={styles.up}>
                <div className={styles.left}>
                    <Title title='BEST DEAL' />
                    <h1>Find Your Best Deal Right Now!</h1>
                </div>
                <div className={styles.right}>
                    <Button button='Appartment' class='orange' />
                    <Button button='Villa House' class='black' />
                    <Button button='Penthouse' class='black' />
                </div>
            </div>
            <div className={styles.down}>
                <div className={styles.start}>
                    <Card cards={cards} hideImage={true} />
                </div>
                <div className={styles.houseDiv}>
                    <img src={house5} alt="house" className={styles.house} />
                </div>
                <div className={styles.end}>
                    <b>Extra Info About Property</b>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, do
                        eiusmod tempor pack incididunt ut labore et dolore magna aliqua
                        quised ipsum suspendisse.
                    </p>
                    <p>
                        When you need free CSS templates, you can simply type TemplateMo in
                        any search engine website. In
                        addition, you can type TemplateMo
                        Portfolio, TemplateMo One Page
                        Layouts, etc.
                    </p>
                    <ButtonVisit widthLarge={true} />
                </div>
            </div>
        </section>
    )
}
