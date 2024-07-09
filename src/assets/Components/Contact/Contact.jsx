import './Contact.scss'
import SectionHeading from '../SectionHeading/SectionHeading'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = ({title}) => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_0kezwcw', 'template_y6nahbg', form.current, {
                publicKey: 'URpL5Tsl8T4Lu9c-k',
            })
            .then(
                () => {
                console.log('SUCCESS!');
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
        };
    return (
        <div id='contact' className='contact'>
            <SectionHeading title="Contact Me" subtitle="Lets Discuss Your Next Projects"/>
            <div className="contact-info">
            <h1>{title}</h1>
            <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className='send'/>
        </form>
            </div>
        </div>
    )
}

export default Contact
