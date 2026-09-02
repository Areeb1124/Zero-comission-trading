import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
              <img src="Media/Images/homeHero2.svg" alt='Hero Img' className='mb-5'/>
              <h1 className="mt-5">Invest in everything</h1>
              <p> Online platform to invest in stocks, derivatives, mutual funds, and
              more</p>
              <a href="https://zero-commission-dashboard.netlify.app/" className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%",margin:"0 auto"}}> Signup Now</a>
            </div>
        </div>
     );
}

export default Hero;