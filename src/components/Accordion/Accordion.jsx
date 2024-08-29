import { useState } from 'react';
import styles from './Accordion.module.css';

const AccordionItem = ({ question, answer, isActive, onToggle }) => (
  <>
    <div
      className={`${styles.item} ${isActive ? styles.active : ''}`}
      onClick={onToggle}
    >
      <div className={styles.title}>{question}</div>
    </div>
    {isActive && (
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: answer }} />
    )}
  </>
);

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}  
          question={item.question}
          answer={item.answer}
          isActive={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

