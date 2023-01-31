import React, { useRef, useState } from 'react';
import styles from './ContactForm.module.scss';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'mail', form.current, 'wJ3avO7RDiR3ktWor')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    const [btnState, setBtnState] = useState(false);

    const handleClick = () => {
        setBtnState(btnState => !btnState)
    }
  
    return (
        <div className={styles.container}>
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                {btnState ? <h2 className={styles.sentConfirmation}>message sent sucessfully!</h2> : ""}
                <input type='text' placeholder='name' name='name' />
                <input type='email' placeholder='your email' name='email' />
                <input type='text' placeholder='subject' name='subject' />
                <textarea placeholder='your message...' name='message' ></textarea>
                <button type="submit" onClick={handleClick} className={styles.submit_btn}>send message</button>
            </form>
        </div>
    );
  };

  export default ContactForm;