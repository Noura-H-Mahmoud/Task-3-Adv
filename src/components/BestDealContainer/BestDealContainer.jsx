import styles from './BestDealContainer.module.css'
import Card from '../Card/Card'
import ButtonVisit from '../ButtonVisit/ButtonVisit'

export default function BestDealContainer({ heading, img, text, space, floor, room }) {
    const cards = [
        {
            id: 1,
            span: space,
            title: 'Total Flat Space',
            borderBottom: '1px solid rgba(232, 232, 220, .7)'
        },
        {
            id: 2,
            span: floor,
            title: 'Floor Number',
            borderBottom: '1px solid rgba(232, 232, 220, .7)'
        },
        {
            id: 3,
            span: room,
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
        }
    ]
    return (
        <div className={styles.down}>
            <div className={styles.start}>
                <Card cards={cards} hideImage={true} />
            </div>
            <div className={styles.houseDiv}>
                <img src={img} alt="house" className={styles.house} />
            </div>
            <div className={styles.end}>
                <b>{heading}</b>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, do
                    eiusmod tempor pack incididunt ut labore et dolore magna aliqua
                    quised ipsum suspendisse.
                </p>
                <p>
                    {text}
                </p>
                <ButtonVisit widthLarge={true} />
            </div>
        </div>
    )
}
