import React from 'react'
import styles from './SocialIcon.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcon() {
    return (
        <div className={styles.socialIcons}>
            <div className={styles.icon}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </div>
            <div className={styles.icon}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <div className={styles.icon}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            <div className={styles.icon}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </div>
    )
}
