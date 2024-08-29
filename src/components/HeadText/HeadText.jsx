import styles from './HeadText.module.css';

export default function HeadText({ text, isWhite }) {
    return (
        <h1 className={isWhite ? styles.whiteText : styles.blackText}>
            {text}
        </h1>
    );
}

