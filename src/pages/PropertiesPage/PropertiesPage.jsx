import HeroShared from '../../components/HeroShared/HeroShared'
import PropertyCards from '../../components/PropertyCards/PropertyCards'
import Button from '../../components/Button/Button'
import styles from './PropertiesPage.module.css'
import { useState } from 'react'
import PaginationDots from '../../components/PaginationDots/PaginationDots'

export default function PropertiesPage() {
  const [active, setactive] = useState('Show All');

  function handleClick(type) {
    setactive(type);
  }
  return (
    <section className={styles.propertiesPage}>
      <HeroShared boxHeading='HOME / PROPERTIES' Heading='PROPERTIES' />
      <div className={styles.buttons}>
        <Button
          button='Show All'
          class={active === 'Show All' ? 'orange' : 'black'}
          onClick={() => handleClick('Show All')}
        />
        <Button
          button='Appartment'
          class={active === 'Appartment' ? 'orange' : 'black'}
          onClick={() => handleClick('Appartment')}
        />
        <Button
          button='Villa House'
          class={active === 'Villa House' ? 'orange' : 'black'}
          onClick={() => handleClick('Villa House')}
        />
        <Button
          button='Penthouse'
          class={active === 'Penthouse' ? 'orange' : 'black'}
          onClick={() => handleClick('Penthouse')}
        />
      </div>
      <div className={styles.propertyCards}>
        <PropertyCards active={active} />
      </div>
      <PaginationDots />
    </section>
  )
}
