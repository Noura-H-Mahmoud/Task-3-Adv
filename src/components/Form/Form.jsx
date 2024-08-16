import React from 'react'
import styles from './Form.module.css'
import Input from '../Input/Input'
import ContactBox from '../ContactBox/ContactBox'
import email from '../../assets/images/email-icon.png'
import phone from '../../assets/images/phone-icon.png'

export default function Form() {
    return (
        <section className={styles.sectionForm}>
            <div className={styles.start}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.01922982501!2d-80.10445710910031!3d25.939249925429834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2sae!4v1723789322704!5m2!1sar!2sae" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className={styles.contact}>
                    <ContactBox icon={phone} para='Phone Number' phone={true} />
                    <ContactBox icon={email} para='Business Email' phone={false} />
                </div>
            </div>
            <form action="#" method="post">
                <Input name='name' idName='order name' type='text' label='Full Name' placeholder='Your Name...' />
                <Input name='email' idName='order email' type='email' label='Email Address' placeholder='Your E-mail...' />
                <Input name='subject' idName='order subject' type='text' label='Subject' placeholder='Subject...' />
                <div className={styles.text}>
                    <label htmlFor="order message">Message</label>
                    <textarea name="message" id="order message" rows="6" placeholder='Your Message'></textarea>
                </div>
                <button>Send Message</button>
            </form>
        </section>
    )
}
