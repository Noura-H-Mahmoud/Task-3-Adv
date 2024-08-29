import styles from './PropertyCards.module.css'
import property1 from '../../assets/images/property-01.jpg'
import property2 from '../../assets/images/property-02.jpg'
import property3 from '../../assets/images/property-03.jpg'
import property4 from '../../assets/images/property-04.jpg'
import property5 from '../../assets/images/deal-01.jpg'
import property6 from '../../assets/images/deal-02.jpg'

export default function PropertyCards({ active }) {
    const cards =
        [
            {
                id: 1,
                img: property1,
                price: '$2.264.000',
                title: '18 New Street Miami, OR 97219',
                bedroom: '8',
                bathroom: '8',
                area: '545m2',
                floor: '3',
                parking: '6 spots',
                titleButton: 'Luxury Villa'
            },
            {
                id: 2,
                img: property2,
                price: '$1.180.000',
                title: '54 Mid Street Florida, OR 27001',
                bedroom: '6',
                bathroom: '5',
                area: '450m2',
                floor: '3',
                parking: '8 spots',
                titleButton: 'Luxury Villa'
            },
            {
                id: 3,
                img: property3,
                price: '$1.460.000',
                title: '26 Old Street Miami, OR 38540',
                bedroom: '5',
                bathroom: '4',
                area: '225m2',
                floor: '3',
                parking: '10 spots',
                titleButton: 'Luxury Villa'
            },
            {
                id: 4,
                img: property4,
                price: '$584.500',
                title: '12 New Street Miami, OR 12650',
                bedroom: '4',
                bathroom: '3',
                area: '125m2',
                floor: '25th',
                parking: '2 cars',
                titleButton: 'Appartment'
            },
            {
                id: 5,
                img: property5,
                price: '$925.600',
                title: '34 Beach Street Miami, OR 42680',
                bedroom: '4',
                bathroom: '4',
                area: '180m2',
                floor: '38th',
                parking: '2 cars',
                titleButton: 'Penthouse'
            },
            {
                id: 6,
                img: property6,
                price: '$450.000',
                title: '22 New Street Portland, OR 16540',
                bedroom: '3',
                bathroom: '2',
                area: '165m2',
                floor: '26th',
                parking: '3 cars',
                titleButton: 'Modern Condo'
            },
        ]
    const filteredCards = active === 'Show All'
        ? cards: active === 'Villa House'
        ? cards.filter(card => card.titleButton === 'Luxury Villa' || card.titleButton === 'Modern Condo')
        : cards.filter(card => card.titleButton === active);
    return (
        <div className={styles.cards}>
            {
                filteredCards.map(card => (
                    <div className={styles.card} key={card.id}>
                        <img src={card.img} alt="property" />
                        <div className={styles.priceLine}>
                            <button>{card.titleButton}</button>
                            <span>{card.price}</span>
                        </div>
                        <h2>{card.title}</h2>
                        <div className={styles.Info}>
                            <p>Bedrooms: <b>{card.bedroom}</b></p>
                            <p>Bathrooms: <b>{card.bathroom}</b></p>
                            <p>Area: <b>{card.area}</b></p>
                            <p>Floor: <b>{card.floor}</b></p>
                            <p>Parking: <b>{card.parking}</b></p>
                        </div>
                        <button className={styles.mainButton}>Schedule a visit</button>
                    </div>
                ))
            }

        </div>
    )
}

