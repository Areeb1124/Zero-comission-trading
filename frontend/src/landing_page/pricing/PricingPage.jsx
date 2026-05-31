import React from 'react';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Brokerage from './Brokerage';
import './PricingPage.css';

function PricingPage() {
    return ( 
        <>
        <div className='pricing-page-container'>
        <Hero/>
        <OpenAccount/>
        <Brokerage/>
        </div>
        </>
     );
}

export default PricingPage;