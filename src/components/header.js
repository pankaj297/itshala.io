import React from "react";
import Home from "./home";
import { Link } from "react-router-dom";


function Header() {

   
  return (
    <>
      <div className="header bg-body-tertiary fixed-top">
        <nav className="navbar p-2 navbar-expand-md">
          <div className="container-fluid togglebt">
            <button
              className="ms-3 bg-light fs-2 border-0 d-block d-md-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="icontog">
                <i class="bi bi-grid"></i>
              </span>
            </button>

            <a className="m-3 d-none d-md-block" href="/">
              <i class="bi bi-mortarboard-fill fs-2 text-success"></i>
            </a>

            <a
              className="navbar-brand d-none d-md-block d-lg-block"
              href="_blank"
            >
              <b>INTERVIEW</b> <b className="m-2 text-success">READY</b>
            </a>

            <div
              className="offcanvas offcanvas-start float-start content"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title fw-bold fs-2"
                  id="offcanvasNavbarLabel"
                >
                  Close
                </h5>
                <button
                  type="button"
                  className="border-0"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i class="bi bi-x-diamond-fill text-danger fs-1"></i>
                </button>
              </div>

              <div className="offcanvas-body ">
                <ul className=" pe-3 fs-3 fw-bold">
                  <li className="nav-item dropdown d-block  d-md-none">
                    <a
                      href="/"
                      className="nav-link text-dark  dropdown-toggle"
                      // href="_blank"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Courses
                    </a>
                    <ul className="dropdown-menu fs-4">
                      <li>
                        <Link to="blog" className="dropdown-item">
                          System Design Simplified
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="_blank">
                          Data Structures & Algorithms
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="_blank">
                          Behavioural Interviews
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item d-block d-md-none ">
                    <a href="/blog" className="nav-link mt-3 ">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item d-block d-md-none fs-3 fw-bold">
                    <a
                      href="/faqs"
                      className="nav-link pointer-event mt-3"
                      aria-current="page"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item  d-block d-md-none">
                    <a
                      href="/comments"
                      className="nav-link  fs-3 fw-bold mt-3"
                      aria-current="page"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <a className="m-3 me-auto d-block d-md-none" href="/">
              <i class="bi bi-mortarboard-fill fs-2 text-success "></i>
            </a>
            <ul className="d-flex">
              <li className="Courseslg nav-item dropdown fw-bolder d-none d-md-block list-unstyled pt-2  m-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="_blank"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/blog" className="dropdown-item">
                      System Design Simplified
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="_blank">
                      Data Structures & Algorithms
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="_blank">
                      Behavioural Interviews
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item  fw-bolder  list-unstyled pt-2  m-2 me-0">
                <Link to="/blog" className="nav-link  pointer-event">
                  Blog
                </Link>
              </li>

              <li className="nav-item list-unstyled m-2 pt-2 ">
                <Link
                  to="/signin"
                  className="nav-link fw-bolder pointer-event "
                >
                  Sign in
                </Link>
              </li>

              <li className="nav-item list-unstyled pt-2 pe-3">
                <a href="https://interviewready.io/learn/system-design-course/how-do-i-use-this-course/what-do-we-offer">
                  <button
                    type="button"
                    class="btn border-2 fw-bold btn-outline-success"
                  >
                    Try for Free
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="content">
        <Home />
      </div>
    </>
  );
}

export default Header;


