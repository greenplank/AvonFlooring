import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
// import ContactForm from '../components/Contact/ContactForm';
import ContactFormOne from '../components/Contact/ContactFormOne';
import Newsletter from '../components/Common/Newsletter';
import Head from "next/head";

class Contact extends Component {
    render() {
        return (
            <>

                <Head>
                    <title>Contact Us
                    </title>
                </Head>

                <PageBanner
                    pageTitle="Contact Us
                    "
                    BGImage="bg-one"
                />

                <ContactInfo />

                <div className="ptb-100">
                    <ContactFormOne />
                </div>
            </>
        );
    }
}

export default Contact;