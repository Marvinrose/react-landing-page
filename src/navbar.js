import React from "react";

function App() {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          STREAMLINE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link aktive fw-bold"  href="#">
              Home
             
            </a>
            <a className="nav-link fw-bold" href="#">
              Services
            </a>
            <a className="nav-link fw-bold" href="#">
              Gallery
            </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
