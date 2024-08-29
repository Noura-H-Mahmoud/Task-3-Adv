import { useState, useEffect, useRef } from 'react';
import styles from './Box.module.css';

export default function Box({ number, head }) {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [isvisible, setvisible] = useState(false);
    const targetNumber = parseInt(number, 10);
    const boxRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setvisible(true);
                }
            },
            { threshold: 0.7 } 
        );

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }

        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isvisible && currentNumber < targetNumber) {
            const interval = setInterval(() => {
                setCurrentNumber(prevNumber => Math.min(prevNumber + 1, targetNumber));
            }, 60);

            return () => clearInterval(interval);
        }
    }, [isvisible, currentNumber, targetNumber]);

    return (
        <div className={styles.Box} ref={boxRef}>
            <span>{currentNumber}</span>
            <h2>{head}</h2>
            <div></div>
        </div>
    );
}