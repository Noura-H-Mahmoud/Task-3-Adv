import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavTop.module.css'
import { faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import SocialIcon from '../SocialIcon/SocialIcon';

export default function NavTop() {
    return (
        <div className={styles.topNav}>
            <div className={styles.leftSide}>
                <div>
                    <a href="mailto:info@company.com" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} className={styles.email} />
                        info@company.com
                    </a>
                </div>
                <div className={styles.border}>
                    <a href="#">
                        <FontAwesomeIcon icon={faMap} className={styles.map} />
                        Sunny Isles Beach, FL 33160
                    </a>
                </div>
            </div>
            <SocialIcon />
        </div>
    )
}
