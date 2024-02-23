import React from 'react'
import { Link } from 'react-router-dom';

function Systemdesign() {
  return (
    <>
      {/* -----------nav bar----------- */}
      <div className="header bg-body-secondary  fixed-top">
        <nav className="navbar  navbar-expand-md">
          <div className="container-fluid togglebt">
            <button
              className="ms-3 bg-body-secondary  fs-2 border-0 d-block d-md-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="icontog">
                <i className="bi bi-grid text-primary "></i>
              </span>
            </button>

            <a className="m-3 d-none d-md-block" href="/">
              <img src="img/TitleLogo.png" alt="logo" height={35} />
            </a>

            <a
              className="navbar-brand  d-none d-md-block d-lg-block"
              href="_blank"
            >
              <b>INTERVIEW</b> <b className="m-2 text-primary">READY</b>
            </a>
            {/* ---------------small screen----------- */}
            <div
              className="offcanvas offcanvas-start float-start "
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
                  className=" border-0  bg-transparent "
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i className="bi bi-x-diamond-fill text-danger fs-1"></i>
                </button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav  pe-3 fs-3 fw-bold">
                  <li className="Courseslg nav-item dropdown d-block d-sm-block d-md-none">
                    <a
                      className="nav-link text-dark  dropdown-toggle"
                      href="_blank"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Courses
                    </a>
                    <ul className="dropdown-menu fs-4">
                      <li>
                        <a className="dropdown-item" href="/systemdesign">
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
                  <li className="nav-item d-block d-md-none ">
                    <a
                      href="/blog"
                      className="nav-link pointer-event  active fs-3 fw-bold"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item d-block d-md-none fs-3 fw-bold">
                    <a className="nav-link active" aria-current="page" href="/">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item  d-block d-md-none">
                    <a
                      className="nav-link active fs-3 fw-bold"
                      aria-current="page"
                      href="/"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              {/* ---------------small screen----------- */}
            </div>

            <a className="m-3 me-auto d-block d-md-none" href="/">
              <img src="img/TitleLogo.png" alt="logo" height={35} />
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
                    <Link to="/systemdesign" className="dropdown-item">
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
              <li className="nav-item  fw-bolder list-unstyled pt-2  m-2 me-0">
                <Link to="/blog" className="nav-link  pointer-event  active">
                  Blog
                </Link>
              </li>

              <li className="nav-item list-unstyled m-2 pt-2 ">
                <Link
                  to="/signin"
                  className="nav-link fw-bolder pointer-event  "
                >
                  Sign in
                </Link>
              </li>

              <li className="nav-item list-unstyled pt-2 pe-3">
                <a href="https://interviewready.io/learn/system-design-course/how-do-i-use-this-course/what-do-we-offer">
                  <button
                    type="button"
                    className="btn border-2 fw-bold btn-outline-primary"
                  >
                    Try for Free
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* -----nav end--------- */}

      <div className="course1 ">
        <div className="SDSblue p-4 d-none d-lg-block  d-flex row-cols-lg-2">
          <div className=" col-lg-7 mx-5 pb-5 ">
            <h1 className=" fw-bolder  mt-4 ">System Design Simplified</h1>
            <p className=" fw-medium  fs-5">
              An A-Z video course on system design patterns and best practices.
              This course ranges from basic concepts like routing, load
              balancing and caching to advanced concepts like concurrency,
              separation of concerns, and design tradeoffs.
            </p>
            <p className="fs-5">
              <i class="bi bi-people-fill fs-4 "></i> 19022+ Students
              <i class="bi bi-chat-right-text-fill fs-5 mx-4  me-2 "></i>Last updated
              on 02/2024
            </p>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Systemdesign;
