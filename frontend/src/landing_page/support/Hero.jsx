import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row align-items-center px-5 py-4" >
        <div className="col-md-6 text-start">
         <h4 className="mb-3">Support portal</h4>
         </div>
         <div className="col-md-6 text-end">
          <a href="" className="text-white">Track tickets</a>
         </div> 
      </div>
      <div className="row px-5 py-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="form-control form-control-lg" placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-md-6 ">
          <h2 className="fs-3 mb-4">Featured</h2>
          <ol className="ps-4">
            <li className="mb-2">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
