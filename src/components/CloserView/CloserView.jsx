import styles from './CloserView.module.css'
import videoFrame from '../../assets/images/video-frame.jpg'
import Box from '../Box/Box'
import Title from '../Title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function CloserView() {
    return (
        <section className={styles.closerView}>
            <div className={styles.background}>
                <Title title='VIDEO VIEW' />
                <h1>Get Closer View & Different Feeling</h1>
                <div className={styles.imgVideo}>
                    <img src={videoFrame} alt="video" />
                    <div className={styles.iconVideo}>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </div>
            </div>
            <div className={styles.boxes}>
                <Box number='34' head='Buildings Finished Now' />
                <Box number='12' head='Years Experience' />
                <Box number='24' head='Awwards Won 2023' />
            </div>
        </section>
    )
}
