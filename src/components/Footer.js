import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5">
        <div className="col-12 col-sm-12 col-md-3">
          <a
            href="/"
            className="footer-logo d-flex align-items-center mb-3 text-decoration-none"
          >
            <img className="img-fluid w-75" src="./images/logo.png" />
          </a>
          <p className="color-secondary p-f-5">
            We make technology produce productive, adaptable and sustainable
            business experiences.
          </p>
        </div>

        <div className="col-5 col-sm-5 col-md-1 mb-3">
          <h5 className="h5 title">Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-muted h6">
                About
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-muted h6">
                Careers
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-muted h6">
                Mobile
              </a>
            </li>
          </ul>
        </div>

        <div className="col-5 col-sm-5 col-md-1 mb-3">
          <h5 className="h5 title">Contact</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-muted h6">
                Help/FAQ
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-muted h6">
                Press
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-muted h6">
                Affilates
              </a>
            </li>
          </ul>
        </div>

        <div className="col-5 col-sm-5 col-md-1 mb-3">
          <h5 className="h5 title">Media</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-muted h6">
                News
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-muted h6">
                Photo
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-muted h6">
                Video
              </a>
            </li>
          </ul>
        </div>

        <div className="media col-8 col-sm-8 col-md-3 mb-3 row justify-content-between align-items-center flex-column">
          <div className="row w-100 justify-content-evenly">
            <div className="social-media">
              <a className="icon">
                <FontAwesomeIcon className="w-25 px-1" icon={faFacebookF} />
              </a>
            </div>
            <div className="social-media">
            <a className="icon"><FontAwesomeIcon className="w-25 px-1" icon={faInstagram} /></a>
            </div>
            <div className="social-media">
            <a className="icon"><FontAwesomeIcon className="w-25 px-1" icon={faTwitter} /></a>

            </div>
          </div>
          <h6 className="h5 discover-title fw-semibold w-100 text-center">
            Discover our app
          </h6>
          <div className="stores row w-100 justify-content-between p-0">
            <a className="btn col">
              <img
                className="img-fluid"
                src="images/9c0f3455a5bc4471d770653cf17a3566 (1).jpg"
              />
            </a>
            <a className="btn col">
              <img
                className="img-fluid"
                src="images/9c0f3455a5bc4471d770653cf17a3566 (2).jpg"
              />
            </a>
          </div>
        </div>

        <p className="w-100 text-center p-f-5 color-secondary py-4">
          All rights reserved@Linkdevelopment.com
        </p>
      </footer>
    </div>
  );
}
