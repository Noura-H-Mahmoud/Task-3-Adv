import React from 'react'
import styles from './Input.module.css'

export default function Input(props) {
    return (
        <div className={styles.input}>
            <label htmlFor={props.idName}>{props.label}</label>
            <input type={props.type} name={props.name} id={props.idName} placeholder={props.placeholder} autofocus required></input>
        </div>
    )
}
