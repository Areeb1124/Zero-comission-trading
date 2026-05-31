import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appstore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6  mt-5 p-5">
          <h1 className="text-muted fs-4" style={{fontSize:"1.5rem"}}>{productName}</h1>
          <p className="mt-3" style={{fontSize:"1rem"}}>{productDescription}</p>
          <div>
            <a
              href={tryDemo}
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{
                marginLeft: "80px",
                textDecoration: "none",
                color: "#387ed1",
              }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="Media\Images\googlePlayBadge.svg" alt="" />
            </a>
            <a href={appstore} style={{ marginLeft: "50px" }}>
              <img src="Media\Images\appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
