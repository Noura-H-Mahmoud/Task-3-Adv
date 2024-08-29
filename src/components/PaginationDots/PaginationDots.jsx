import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './PaginationDots.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function PaginationDots() {
    return (
        <div className={styles.paginationDots}>
            <div>1</div>
            <div className={styles.active}>2</div>
            <div>3</div>
            <div>
                <FontAwesomeIcon icon={faChevronRight} size="2xs" />
                <FontAwesomeIcon icon={faChevronRight} size="2xs" />
            </div>
        </div>
    )
}
