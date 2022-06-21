import React from 'react';
import Companies from '../components/Companies';
import Contact from '../components/Contact';
import Customers from '../components/Customers';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Partner from '../components/Partner';
import CookieConsent from "react-cookie-consent";

function Home() {
    return (
        <div>
            <Navigation />
            <Hero />
            <Partner />
            <Companies />
            <Customers />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
