import styles from './Form.module.css'
import Input from '../Input/Input'

export default function Form() {
    return (
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
    )
}
