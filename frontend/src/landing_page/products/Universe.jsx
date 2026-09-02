import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mb-5">
        <h1 className="fs-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="Media\Images\smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\Images\streakLogo.png" alt="" style={{ width: "45%" }} />
          <p className="text-small text-muted">Systematic trading platform </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\Images\sensibullLogo.svg" alt="" style={{ width: "75%" }} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\Images\dittoLogo.png" alt="" style={{ width: "40%" }} />
          <p className="text-small text-muted">Personalised advice</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\Images\zerodhaFundhouse.png" alt="" style={{ width: "55%" }} />
          <p className="text-small text-muted">Our asset management venture</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\Images\goldenpiLogo.png" alt="" style={{ width: "55%" }} />
          <p className="text-small text-muted">Investment Research Platform</p>
        </div>
        <a
          href="https://zero-commission-dashboard.netlify.app/register"
          className="p-2 btn btn-primary fs-5 mb-5 mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </a>
      </div>
    </div>
  );
}

export default Universe;
