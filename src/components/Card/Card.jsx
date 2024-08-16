import React from 'react';
import styles from './Card.module.css';

export default function Card({ cards, hideImage }) {
    return (
        <div className={styles.cardsContainer}>
            {cards.map((card) => (
                <div key={card.id} className={styles.card}>
                    <div className={`${styles.cardContainer} ${!hideImage ? '' : styles.gap}`} style={{ borderBottom: card.borderBottom }}>
                        <div className={styles.left}>
                            {!hideImage && <img src={card.img} alt='icon' />}
                            <p>{card.title}</p>
                        </div>
                        <div className={styles.right}>
                            <span>{card.span}</span>
                            <p>{card.para}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
