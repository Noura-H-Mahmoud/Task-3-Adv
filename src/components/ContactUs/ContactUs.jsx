import React from 'react';
import styles from './ContactUs.module.css';
import Title from '../Title/Title';
import Form from '../Form/Form';

export default function ContactUs() {
    return (
        <section id='contact' className={styles.contactUs}>
            <div className={styles.background}>
                <Title title='CONTACT US' />
                <h1>Get In Touch With Our Agents</h1>
            </div>
            <div className={styles.formLanding}>
                <Form />
            </div>
        </section>
    );
}

