import React from 'react'
import styles from './ContactBox.module.css'

export default function ContactBox(props, { phone }) {
    return (
        <div className={styles.contactBox}>
            <img src={props.icon} alt="icon" />
            <div className={styles.content}>
                {props.phone ?
                    <a href="tel:+10100200340">010-020-0340</a> :
                    <a href="mailto:info@villa.ca">info@villa.ca</a>
                }
                <p>{props.para}</p>
            </div>
        </div>
    )
}
