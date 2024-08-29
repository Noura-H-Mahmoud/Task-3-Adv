import styles from './Button.module.css'

export default function Button(props) {
    return (
        <button className={styles[props.class]} onClick={props.onClick}>
            {props.button}
        </button>
    )
}
