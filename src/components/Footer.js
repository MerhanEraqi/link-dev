import React from "react";

export default function Footer() {
  return (
    <div class="container">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
        <div class="col-12 col-sm-12 col-md-2">
          <a
            href="/"
            class="footer-logo d-flex align-items-center mb-3 text-decoration-none"
          >
            <img className="img-fluid w-75" src="./images/logo.png" />
          </a>
          <p class="color-secondary p-f-5">
            We make technology produce productive, adaptable and sustainable
            business experiences.
          </p>
        </div>

        <div class="col-5 col-sm-5 col-md mb-3">
          <h5 className="h5">Company</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                About
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                Careers
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                Mobile
              </a>
            </li>
          </ul>
        </div>

        <div class="col-5 col-sm-5 col-md mb-3">
          <h5 className="h5">Contact</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                Help/FAQ
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                Press
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                Affilates
              </a>
            </li>
          </ul>
        </div>

        <div class="col-5 col-sm-5 col-md mb-3">
          <h5 className="h5">Media</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                News
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                Photo
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                Video
              </a>
            </li>
          </ul>
        </div>

        <div class="col-5 col-sm-5 col-md mb-3">
          <h5 className="h5">Media</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                News
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                Photo
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted h6">
                Video
              </a>
            </li>
          </ul>
        </div>

        <p className="w-100 text-center p-f-5 color-secondary py-4">All rights reserved@Linkdevelopment.com</p>
      </footer>
    </div>
  );
}
