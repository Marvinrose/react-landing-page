import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./navbar";

import "./App.css";

function App() {
  return (
    <div className="">
      <Navbar />
      <div id="hero-section">
        <div className="hero-contents">
          <h1 className="header">Empowering Society Through Science</h1>
          <p>Food Lab is one point solution for all food safety needs.</p>
          <div className="button-div">
            <button className="button">Get Started</button>
          </div>
        </div>
        <div
          id="carouselExampleDark"
          class="carousel  slide mb-5 "
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                height="550px"
                src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?cs=srgb&dl=pexels-pixabay-414860.jpg&fm=jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                height="550px"
                src="https://images.unsplash.com/photo-1564325724739-bae0bd08762c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2NpZW5jZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                height="550px"
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                height="550px"
                src="https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyYWwlMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                height="550px"
                src="https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg?cs=srgb&dl=pexels-pixabay-256302.jpg&fm=jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container vertical mx-auto d-block">
        <h4 className="vertical-header mb-5"> Food Lab Food Safety Services</h4>
        <div className="row pb-5">
          <div className="col first-col">
            <div className="row lab-images">
              <div className="col">
                <img alt=""
                  className="img-fluid lab-image-row mx-auto d-block mb-2"
                  src="https://wallpaperaccess.com/full/909067.jpg"
                />
                <img alt=""
                  className="img-fluid lab-image-row mx-auto d-block"
                  src="https://wallpaperaccess.com/full/5748767.jpg"
                />
              </div>
              <div className="col">
                <img alt=""
                  className="img-fluid lab-image "
                  src="https://media.istockphoto.com/photos/woman-scientist-in-lab-look-at-science-microscope-medical-test-and-picture-id1330728771?b=1&k=20&m=1330728771&s=170667a&w=0&h=dPZrgQ7ky7d_g1ZgUCOV5jIG927hfggAOan3_CNOgNE="
                />
              </div>
            </div>
          </div>
          <div className="col">
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              veritatis, reiciendis ipsum illo dolorem modi quasi cumque eaque
              suscipit quidem nobis incidunt voluptatum aliquid explicabo soluta
              quam voluptas accusamus debitis?
            </p>
          </div>
        </div>
        <footer className="">
          <div className="row">
            <div className="col bg-white">
              <h3>Food Lab</h3>
              <p> 203, Abc road, xyz</p>
              <p>
                {" "}
                <strong>Phone:</strong> +91 44 4269 2288
              </p>
              <p>
                {" "}
                <strong>Email:</strong> admin@yahoo.net
              </p>
            </div>
            <div className="col bg-color second-col">
              <div className="short-hr"></div>
              <h4 className="pt-3">Useful Link</h4>
              <p> Home</p>
              <p> Services</p>
              <p> Training Registration</p>
              <p> Home</p>
              <p> Services</p>
              <small>
                {" "}
                Food Labs Inc.&copy;Copyright 2022. All rights Reserved
              </small>
            </div>
            <div className="col third-col  bg-color">
              <p> Support</p>
              <p> Contact Us</p>
            </div>
            <div className="col  bg-color">
              <div className="short-hr "></div>
              <h4 className="pt-3">Site Map</h4>
              <p> Home</p>
              <p> Services</p>
              <p> Training Registration</p>
              <p> Home</p>
              <p> Services</p>
              <p> Training Registration</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
