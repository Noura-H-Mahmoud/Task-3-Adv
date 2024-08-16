import React from 'react'
import styles from './ButtonVisit.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function ButtonVisit({ widthLarge }) {
    return (
        <button className={`${styles.buttonVisit} ${!widthLarge ? '' : styles.widthLarge}`}>
            <div className={`${styles.icon} ${!widthLarge ? '' : styles.largeIcon}`}>
                <FontAwesomeIcon icon={faCalendar} />
            </div>
            Schedule a visit
        </button>
    )
}
