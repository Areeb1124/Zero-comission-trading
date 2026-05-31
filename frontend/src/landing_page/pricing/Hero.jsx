import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom p-5 mt-5 text-center">
        <h1 className="fs-3">Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row mt-5 p-5 text-center">
        <div className="col-4">
          <img src="Media\Images\pricingEquity.svg" alt="" style={{width:"70%"}}/>
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="Media\Images\intradayTrades.svg" alt="" style={{width:"70%"}}/>
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4">
          <img src="Media\Images\pricingEquity.svg" alt="" style={{width:"70%"}}/>
          <h1 className="fs-4">Free direct MF</h1>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
