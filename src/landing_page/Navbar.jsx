import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom " style={{ backgroundColor: "#FFF" }}>
      <div class="container p-2">
        <a class="navbar-brand" href="#">
          <img src="Media\Images\logo (1).svg" alt="Logo" style={{width:"25%"}}/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link " aria-current="page" href="#">
              Signup
            </a>
            <a class="nav-link" href="#">
              About
            </a>
            <a class="nav-link" href="#">
              Product
            </a>
            <a class="nav-link" aria-disabled="true">
              Pricing 
            </a>
             <a class="nav-link" aria-disabled="true">
              Support 
            </a>
             <a class="nav-link" aria-disabled="true">
               <i class="fa-solid fa-bars"></i>
            </a> 
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
