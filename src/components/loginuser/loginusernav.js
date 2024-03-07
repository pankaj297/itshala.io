import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem,} from "reactstrap";


function Loginusernav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

   function notifaction(){
     alert("🔔Notifications On 🔔");
   }


   const [dropdownOpen, setDropdownOpen] = useState(false);

   const toggle = () => setDropdownOpen(!dropdownOpen);


  
  return (
    <>
      <div className="header p-0  bg-body-tertiary fixed-top">
        <nav className="navbar p-0 navbar-expand-md">
          <div className="container-fluid togglebt">
            <button
              className="ms-2 bg-body-tertiary fs-1 border-0 d-block d-md-none"
              type="button"
              onClick={toggleMenu}
            >
              <i className="bi bi-grid"></i>
            </button>

            <Link to="/loginuserhome" className="m-2 ms-3   d-none d-md-block">
              <img src="img/TitleLogo.png" alt="logo" height={35} />
            </Link>

            <Link
              className="navbar-brand brandnamelgsc ms-2  fs-4 d-none d-md-block d-lg-block"
              to="/"
            >
              <b>INTERVIEW</b> <b className="m-2  text-primary">READY</b>
            </Link>

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
                        <Link to="/logSDS" className="dropdown-item">
                          System Design Simplified
                        </Link>
                      </li>
                      <li>
                        <Link to="/logDS" className="dropdown-item">
                          Data Structures & Algorithms
                        </Link>
                      </li>
                      <li>
                        <Link to="/logBinterviews" className="dropdown-item">
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
                      to="/loguserblog"
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

            {/* --------------for big screen -------------------- */}
            <Link
              to="/loginuserhome"
              className="m-2  me-auto d-block d-md-none"
            >
              <img src="img/TitleLogo.png" alt="logo" height={35} />
            </Link>
            <ul className="d-flex">
              <li className="Courseslg nav-item dropdown  fw-bolder d-none d-md-block list-unstyled pt-2  me-4  m-2">
                <Link
                  className=" nav-link fs-5 text-body-secondary  dropdown-toggle"
                  role="button"
                  onClick={toggleCourses}
                  aria-expanded={isCoursesOpen}
                >
                  Courses
                </Link>
                <ul className={`dropdown-menu ${isCoursesOpen ? "show" : ""}`}>
                  <li>
                    <Link to="/logSDS" className="dropdown-item">
                      System Design Simplified
                    </Link>
                  </li>
                  <li>
                    <Link to="/logDS" className="dropdown-item">
                      Data Structures & Algorithms
                    </Link>
                  </li>
                  <li>
                    <Link to="/logBinterviews" className="dropdown-item">
                      Behavioural Interviews
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item fs-5 text-body-secondary fw-bolder list-unstyled pt-2 m-2 me-4 d-none d-md-block">
                <Link
                  to="/loguserblog"
                  className="nav-link pointer-event active"
                >
                  Blog
                </Link>
              </li>

              {/* -----------expriment---- */}
              <li className="nav-item list-unstyled   me-4 mt-3 ">
                <Link
                  to="/selectcourse"
                  className="nav-link   fw-bolder pointer-event"
                >
                  <i className="bi bi-cart3 fs-5  showiocn"></i>
                </Link>
              </li>

              {/* -----------expriment---- */}

              <li className="nav-item list-unstyled  me-4 mt-3 mt-sm-2 ">
                <button
                  className="nav-link  fw-bolder pointer-event"
                  onClick={notifaction}
                >
                  <i className="bi bi-bell fs-3"></i>
                </button>
              </li>

              {/* <li className="nav-item list-unstyled  me-1  mt-2 ">
                <button className="nav-link fw-bolder pointer-event">
                  <div className="showiocn border-0 bg-primary text-white ">
                    PN
                  </div>
                </button>
              </li> */}

              <li className="nav-item  list-unstyled me-1 mt-2">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle className=" nav-link  border-0  bg-white  fw-bolder pointer-event">
                    <div className="showiocn border-0 bg-primary text-white">
                      PN
                    </div>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>
                      {" "}
                      <Link className=" text-decoration-none text-dark" to="/">Log Out</Link>{" "}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Loginusernav;
