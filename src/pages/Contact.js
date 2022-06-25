import { useState } from 'react';

import useMatchMedia from './../hooks/useMatchMedia';
import HeroSecondary from './../components/HeroSecondary';
import ContactDetails from '../components/contact-page/ContactDetails';
import LeafletMap from './../components/LeafletMap';
import { contactData } from './../data/contact-page-contact-data';
import ContactForm from '../components/ContactForm';

function Contact() {
    const [showOfficeAtTheMap, setShowOfficeAtTheMap] = useState(null);
    const mobile = useMatchMedia('(max-width: 48rem)');
    const desktop = useMatchMedia('(min-width: 64rem)');

    const media = [mobile, desktop];

    const getOffice = (index) => {
        setShowOfficeAtTheMap(contactData[index]);
    };
    return (
        <>
            <HeroSecondary
                media={media}
                photo='hero'
                photoLocation='contact'
                alt='old type of phone'
                decorationText='Contact'
                title='Tell us about your project'
                desc='We’d love to hear more about your project. Please, leave a message below or give
                us a call. We have two offices, one in Texas and one in Tennessee. If you find
                yourself nearby, come say hello!'
            />
            <ContactDetails
                title={
                    <>
                        Contact
                        <br /> Details
                    </>
                }
                offices={contactData}
                getOfficeIndex={getOffice}
            />
            <LeafletMap officeLocation={showOfficeAtTheMap} />
            <ContactForm />
        </>
    );
}

export default Contact;
