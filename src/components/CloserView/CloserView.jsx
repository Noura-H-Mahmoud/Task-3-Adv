import React from 'react'
import styles from './CloserView.module.css'
import videoFrame from '../../assets/images/video-frame.jpg'
import Box from '../Box/Box'
import Title from '../Title/Title'

export default function CloserView() {
    return (
        <section className={styles.closerView}>
            <div className={styles.background}>
                <Title title='VIDEO VIEW' />
                <h1>Get Closer View & Different Feeling</h1>
                <img src={videoFrame} alt="video" />
            </div>
            <div className={styles.boxes}>
                <Box number='34' head='Buildings Finished Now' />
                <Box number='12' head='Years Experience' />
                <Box number='24' head='Awwards Won 2023' />
            </div>
        </section>
    )
}
