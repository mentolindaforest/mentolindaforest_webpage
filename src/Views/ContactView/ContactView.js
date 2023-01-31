import React from 'react';
import NavBar from '../../Components/SiteWrapper/NavBar/NavBar';
import ContactLinks from '../../Components/ContactLinks/ContactLinks';
import ContactForm from '../../Components/ContactForm/ContactForm';

const ContactView = () => (
    <>
        <NavBar />
        <ContactForm />
        <ContactLinks />
    </>
);

export default ContactView;