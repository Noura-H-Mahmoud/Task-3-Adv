import { useEffect, useState } from 'react'
import styles from './HeroShared.module.css'
import background1 from '../../assets/images/page-heading-bg.jpg'

export default function HeroShared({ img, boxHeading, Heading }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])



    return (
        <header className={`${styles.heroShared} ${isScrolled ? styles.scrolled : ''}`}>
            <img src={background1} alt="background" className={styles.background} />
            <div className={styles.heading}>
                <div className={styles.boxHeading}>{boxHeading}</div>
                <h1>{Heading}</h1>
            </div>
        </header>
    )
}

