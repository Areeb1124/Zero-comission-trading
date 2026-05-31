import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row" style={{display: "flex", alignItems: "center"}}>
        <div className="col-6 p-5 mt-5">
          <h1 className="text-muted s" style={{fontSize:"1.5rem"}}>{productName}</h1>
          <p className="mt-3" style={{fontSize:"1rem"}}>{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{
                color: "#387ed1",
              }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="" style={{width:"100%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
