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
      <div className="SDScards   d-flex justify-content-center">
        <div className="course1 d-flex   row-cols-lg-2 ">
          <div className="SDSblue p-4 d-none d-lg-block col-lg-8 ">
            <div className=" mx-5 pb-5 ">
              <h1 className=" fw-bolder  mt-4 ">System Design Simplified</h1>
              <p className=" fw-medium  fs-5">
                An A-Z video course on system design patterns and best
                practices. This course ranges from basic concepts like routing,
                load balancing and caching to advanced concepts like
                concurrency, separation of concerns, and design tradeoffs.
              </p>
              <p className="fs-5">
                <i class="bi bi-people-fill fs-4 "></i> 19022+ Students
                <i class="bi bi-chat-right-text-fill fs-5 mx-4  me-2 "></i>Last
                updated on 02/2024
              </p>
            </div>
          </div>
          {/* ----card------- */}
          <div className=" mt-5 ">
            <div class="card   cardswidthSDY  border-1 border-primary   col-lg-5 mt-lg-5 p-3 ps-1 CourseCard ">
              {/* <img
                src="img/thumbnailFvideo.png"
                class="img-fluid rounded-2  card-img-top my-1"
                alt="img"
              /> */}
              <video
                className="img-fluid  rounded-3"
                poster="img/thumbnailFvideo.png"
                controls
                src="img/Intro.mp4"
              ></video>
              <div class="card-body">
                <h5 class="card-title fw-bold">System Design Simplified</h5>
                <div className="mt-1 d-flex  justify-content-between w-25 w-xs-25">
                  <p className=" bg-primary-subtle   p-1 rounded">SDE1</p>
                  <p className="bg-primary-subtle mx-2 p-1 rounded">SDE2</p>
                  <p className="bg-primary-subtle   p-1 rounded">SDE3</p>
                </div>
                <div className="roundPhoto1">
                  <img
                    src="img/roundcardphoto1.jpeg"
                    className="roundimg1  rounded-5"
                    alt="img"
                  />{" "}
                  Gaurav Sen
                </div>
                <p class="card-text  d-block d-lg-none">
                  An A-Z video course on system design patterns and best
                  practices. This course ranges from basic concepts like
                  routing, load balancing and caching to advanced concepts like
                  concurrency, separation of concerns, and design tradeoffs.
                </p>
              </div>
              <ul class="list-group-item ms-3  list-group-flush">
                <li class="list-group-item">
                  <i class="bi bi-camera-video text-primary pe-2"></i>
                  285+ Video Lessons
                </li>

                <li class="list-group-item mt-2">
                  <i class="bi bi-file-text text-primary pe-2"></i>44+ Quizzes
                </li>

                <li class="list-group-item pt-2">
                  <i class="bi bi-file-earmark-arrow-down text-primary pe-2"></i>
                  64+ Downloadable Resources
                </li>

                <li class="list-group-item pt-2">
                  <i class="bi bi-person-video text-primary pe-2"></i>Live
                  Classes
                </li>

                <li class="list-group-item pt-2">
                  <i class="bi bi-file-medical text-primary pe-2"></i>Interview
                  Questions
                </li>

                <li class="list-group-item pt-2">
                  <i class="bi bi-clock text-primary pe-2"></i>Continuous
                  Updates
                </li>

                <li class="list-group-item pt-2">
                  <i class="bi bi-meta text-primary pe-2"></i>Lifetime Access
                </li>
              </ul>
              <div class="card-body pt-0">
                <a href="_blank" class="text-primary text-decoration-none">
                  <b>
                    <y className="text-dark">Buy for</y> 50% OFF
                  </b>
                </a>
                <p className="text-dark fw-bold">
                  ₹7,995.00{" "}
                  <y className="fw-lighter text-secondary text-decoration-line-through">
                    ₹15,990.00
                  </y>
                </p>
                <a
                  href="_blank"
                  class="btn w-100  border-primary  border-2 fw-bold   text-primary  card-link"
                >
                  Learn More <i class="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* ----card end------- */}
        </div>
      </div>
    </>
  );
}

export default Systemdesign;
