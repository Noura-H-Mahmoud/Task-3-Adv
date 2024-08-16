import React from 'react'
import styles from './Box.module.css'

export default function Box(props) {
    return (
        <div className={styles.Box}>
            <span>{props.number}</span>
            <h2>{props.head}</h2>
            <div></div>
        </div>
    )
}
