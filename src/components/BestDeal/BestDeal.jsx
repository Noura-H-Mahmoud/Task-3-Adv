import { useState } from 'react'
import styles from './BestDeal.module.css'
import Title from '../Title/Title'
import Button from '../Button/Button'
import BestDealContainer from '../BestDealContainer/BestDealContainer'
import property from '../../assets/images/deal-01.jpg'
import penthouse from '../../assets/images/deal-03.jpg'
import Villa from '../../assets/images/deal-02.jpg'

export default function BestDeal() {
    const [active, setactive] = useState('Appartment');

    function handleClick(type) {
        setactive(type);
    }

    const text1 = `When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.`;
    const text2 = `Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.`;

    let content;
    if (active === 'Appartment') {
        content = <BestDealContainer heading='Extra Info About Property' img={property} space='185 m2' floor='26th' room='4' text={text1} />;
    } else if (active === 'Villa House') {
        content = <BestDealContainer heading='Extra Info About Villa' img={Villa} space='250 m2' floor='26th' room='5' text={text2} />;
    } else if (active === 'Penthouse') {
        content = <BestDealContainer heading='Extra Info About Penthouse' img={penthouse} space='320 m2' floor='34th' room='6' text={text2} />;
    }

    return (
        <section className={styles.BestDealBackground}>
            <div className={styles.BestDeal}>
                <div className={styles.up}>
                    <div className={styles.left}>
                        <Title title='BEST DEAL' />
                        <h1>Find Your Best Deal Right Now!</h1>
                    </div>
                    <div className={styles.right}>
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
                </div>
                {content}
            </div>
        </section>
    )
}
