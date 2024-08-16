import React, { useState } from 'react';
import styles from './Hero.module.css';
import banner1 from '../../assets/images/banner-01.jpg'
import banner2 from '../../assets/images/banner-02.jpg'
import banner3 from '../../assets/images/banner-03.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    return (
        <section id='home' className={styles.hero}>
            <div className={styles.slider}>
                <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    <div className={styles.slide}>
                        <img src={banner1} alt="Image 1" />
                    </div>
                    <div className={styles.slide}>
                        <img src={banner2} alt="Image 2" />
                    </div>
                    <div className={styles.slide}>
                        <img src={banner3} alt="Image 3" />
                    </div>
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

