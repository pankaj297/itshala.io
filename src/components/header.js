import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <>
      <div className="header bg-body-tertiary fixed-top">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid togglebt">
            <button
              className="ms-2 bg-body-tertiary fs-2 border-0 d-block d-md-none"
              type="button"
              onClick={toggleMenu}
            >
              <i className="bi bi-grid"></i>
            </button>

            <a className="m-2 d-none d-md-block" href="/">
              <img src="img/TitleLogo.png" alt="logo" height={35} />
            </a>

            <a
              className="navbar-brand d-none d-md-block d-lg-block"
              href="_blank"
            >
              <b>INTERVIEW</b> <b className="m-2 text-primary">READY</b>
            </a>

            <div
              className={`offcanvas offcanvas-start float-start ${
                isMenuOpen ? "show" : ""
              }`}
              tabIndex="-1"
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
                  className="border-0 bg-transparent"
                  onClick={toggleMenu}
                  aria-label="Close"
                >
                  <i className="bi bi-x-diamond-fill text-danger fs-1"></i>
                </button>
              </div>

              <div className="offcanvas-body">
                <div className="navbar-nav pe-3 fs-3 fw-bold">
                  <div className="Courseslg nav-item dropdown d-block d-sm-block d-md-none">
                    <button
                      className="nav-link text-dark dropdown-toggle"
                      onClick={toggleCourses}
                      aria-expanded={isCoursesOpen}
                    >
                      Courses
                    </button>
                    <ul
                      className={`dropdown-menu fs-4 ${
                        isCoursesOpen ? "show" : ""
                      }`}
                    >
                      <li>
                        <Link to="/systemdesign" className="dropdown-item">
                          System Design Simplified
                        </Link>
                      </li>
                      <li>
                        <Link to="/dataStructure" className="dropdown-item">
                          Data Structures & Algorithms
                        </Link>
                      </li>
                      <li>
                        <Link to="/Behavioural" className="dropdown-item">
                          Behavioural Interviews
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <li
                    className={`nav-item d-block d-md-none ${
                      isMenuOpen ? "show" : ""
                    }`}
                  >
                    <Link
                      to="/blog"
                      className="nav-link pointer-event active fs-3 fw-bold"
                      onClick={toggleMenu}
                    >
                      Blog
                    </Link>
                  </li>
                  <li
                    className={`nav-item d-block d-md-none fs-3 fw-bold ${
                      isMenuOpen ? "show" : ""
                    }`}
                  >
                    <Link
                      to="/faqs"
                      className="nav-link active"
                      aria-current="page"
                      onClick={toggleMenu}
                    >
                      FAQs
                    </Link>
                  </li>
                  <li
                    className={`nav-item d-block d-md-none ${
                      isMenuOpen ? "show" : ""
                    }`}
                  >
                    <Link
                      to="/comments"
                      className="nav-link active fs-3 fw-bold"
                      aria-current="page"
                      onClick={toggleMenu}
                    >
                      Testimonials
                    </Link>
                  </li>
                </div>
              </div>
            </div>

            <a className="m-3 me-auto d-block d-md-none" href="/">
              <img src="img/TitleLogo.png" alt="logo" height={35} />
            </a>
            <ul className="d-flex">
              <li className="Courseslg nav-item dropdown fw-bolder d-none d-md-block list-unstyled pt-2 m-2">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  onClick={toggleCourses}
                  aria-expanded={isCoursesOpen}
                >
                  Courses
                </a>
                <ul className={`dropdown-menu ${isCoursesOpen ? "show" : ""}`}>
                  <li>
                    <Link to="/systemdesign" className="dropdown-item">
                      System Design Simplified
                    </Link>
                  </li>
                  <li>
                    <Link to="/dataStructure" className="dropdown-item">
                      Data Structures & Algorithms
                    </Link>
                  </li>
                  <li>
                    <Link to="/Behavioural" className="dropdown-item">
                      Behavioural Interviews
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item fw-bolder list-unstyled pt-2 m-2 me-0 d-none d-md-block">
                <Link to="/blog" className="nav-link pointer-event active">
                  Blog
                </Link>
              </li>

              <li className="nav-item list-unstyled m-2 pt-2">
                <Link to="/signin" className="nav-link fw-bolder pointer-event">
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
    </>
  );
}

export default Header;
