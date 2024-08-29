import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import banner1 from '../../assets/images/banner-01.jpg'
import banner2 from '../../assets/images/banner-02.jpg'
import banner3 from '../../assets/images/banner-03.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [banner1, banner2, banner3];
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Change slide every 3.3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3300);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id='home' className={styles.hero}>
            <div className={styles.slider}>
                <div className={styles.slides}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`${styles.slide} ${currentIndex === index ? styles.active : ''}`}
                        >
                            <img src={slide} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.navigation}>
                <button onClick={prevSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className={styles.dots}>
                {[0, 1, 2].map((index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
            <div className={styles.content}>
                <div className={styles.canada}>
                    Toronto, <span>Canada</span>
                </div>
                <h1>HERRY! GET THE BEST VILLA FOR YOU</h1>
            </div>
        </section>

    );
}

