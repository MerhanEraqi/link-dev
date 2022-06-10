import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <a
          href="/"
          class="d-flex align-items-center col-md-2 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img className="img-fluid" src="./images/logo.png" />
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" class="nav-link px-2">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2">
              About Us
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2">
              News
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2">
              Contact Us
            </a>
          </li>
        </ul>

        <div class="col-md-3 text-end d-flex justify-content-between">
          <button type="button" class="btn me-2">
            Login
          </button>
          <button type="button" class="btn btn-border px-3 col-auto">
            Sign up
          </button>
          <button className="border-0 btn d-fle align-items-center col-auto">EN <FontAwesomeIcon className="w-25 px-1" icon={faChevronDown} /></button>
        </div>
      </header>
    </div>
  );
}
