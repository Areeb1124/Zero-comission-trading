import React from "react";

function Team() {
  return (
    <div className="container  border-top">
      <div className="row p-5 mt-5">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row">
        <div className="col-6 text-center p-3">
          <img
            src="Media\Images\nithinKamath.jpg"
            alt=""
            style={{ width: "50%", borderRadius: "100%" }}
          />
          <h4 className="mt-5">Nitin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="" style={{color:"#387ed1"}}>Homepage</a> / <a href="" style={{color:"#387ed1"}}>TradingQnA</a> /{" "}
            <a href="" style={{color:"#387ed1"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
