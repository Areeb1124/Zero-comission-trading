import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom " style={{ backgroundColor: "#FFF" }}>
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="Media\Images\logo (1).svg" alt="Logo" style={{width:"25%"}}/>
        </Link>
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
            <Link class="nav-link " aria-current="page" to="/signup">
              Signup
            </Link>
            <Link class="nav-link" to="/about">
              About
            </Link>
            <Link class="nav-link" to="/product">
              Product
            </Link>
            <Link class="nav-link" aria-disabled="true" to="/pricing">
              Pricing 
            </Link>
             <Link class="nav-link" aria-disabled="true" to="/support">
              Support 
            </Link>
             <Link class="nav-link" aria-disabled="true">
               <i class="fa-solid fa-bars"></i>
            </Link> 
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
