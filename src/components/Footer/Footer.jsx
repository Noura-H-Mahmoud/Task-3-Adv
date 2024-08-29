import styles from './Footer.module.css';

export default function Footer({ OtherPage }) {
    return (
        <footer className={OtherPage ? `${styles.footer} ${styles.margin}` : styles.footer}>
            <p>
                Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design: TemplateMo
            </p>
        </footer>
    );
}


