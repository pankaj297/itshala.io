import React, { useState } from "react";
import { Link } from "react-router-dom";
import Content from "./coursecontent";
// import Comments from './comments';
import Data from "./Api";
import Footer from "./Footer";
import QData2 from "./Qestiondata2";

function Behavioural() {
  const [apiData] = useState(Data);
  const [contentdata] = useState(Content);

  // strict equality operator

  const [expandedCard, setExpandedCard] = useState(null);

  const handleButtonClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const [rowData2] = useState(QData2);

  //  strict equality operator

  const [expandedCard2, setExpandedCard2] = useState(null);

  const handleButtonClick2 = (cardId2) => {
    setExpandedCard2(expandedCard2 === cardId2 ? null : cardId2);
  };

  return (
    <>
      {/* -----------nav bar----------- */}
      <div className="header  bg-body-tertiary   fixed-top">
        <nav className="navbar  navbar-expand-md">
          <div className="container-fluid togglebt">
            <button
              className="ms-3  bg-body-tertiary    fs-2 border-0 d-block d-md-none"
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
                        <a className="dropdown-item" href="/dataStructure">
                          Data Structures & Algorithms
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/Behavioural">
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
      <div className="SDScards d-none d-lg-block">
        <div className="course1 d-flex">
          <div className="SDSblue p-4 col-lg-8">
            <div className=" mx-5 pb-5 d-none d-lg-block ">
              <h1 className=" fw-bolder  mt-4 ">Behavioural Interviews</h1>
              <p className=" fw-medium  fs-5">
                This course is for professionals with 0 to 10 years of
                experience who is applying for a job and looking to ace their
                behavioral interviews. The facilitator, Dr. Ashis Sen, is a
                subject matter expert on competency-based interviewing.
              </p>
              <p className="fs-5">
                <i className="bi bi-people-fill fs-4 "></i> 1670+ Student
                <i className="bi bi-chat-right-text-fill fs-5 mx-4  me-2 "></i>
                Last updated on 03/2023
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 container-fluid   row-cols-lg-2  ">
        {/* ------------small screen card---- */}
        <div className="card01 smcard d-block d-lg-none ms-4">
          <div className="card  cardswidthSDY border-1 border-primary    CourseCard ">
            <video
              className="img-fluid m-2  rounded-2 "
              poster="img/cardphoto3.jpeg"
              controls
              src="img/Intro.mp4"
            ></video>
            <div className="card-body">
              <h5 className="card-title fw-bold d-block d-lg-none fs-2">
                Behavioural Interviews
              </h5>
              <div className=" d-flex gap-3 fw-bold d-block d-lg-none">
                <p>
                  <i className="bi bi-star-fill text-warning me-2 "></i>4.77
                  (9887)
                </p>
                <p>
                  <i className="bi bi-people-fill"></i> 1670+ Students
                </p>
                <p>
                  <i className="bi bi-people-fill"></i> Last updated 03/2023
                </p>
              </div>
              <p className="card-text  d-block d-lg-none">
                This course is for professionals with 0 to 10 years of
                experience who is applying for a job and looking to ace their
                behavioral interviews. The facilitator, Dr. Ashis Sen, is a
                subject matter expert on competency-based interviewing.
              </p>
            </div>
            <div className="ms-3">
              <a
                href="_blank"
                className="text-primary text-decoration-none fs-6"
              >
                <b>
                  <y className="text-dark ">Buy for</y> 70% OFF
                </b>
              </a>
              <p className="text-dark   fw-bold fs-4">
                ₹1,197.00
                <y className="fw-lighter text-secondary text-decoration-line-through">
                  ₹3,990.00
                </y>
              </p>
            </div>
            <div className=" ">
              <div className="d-grid gap-2 ">
                <button
                  className="btn btn-primary mx-3  py-2 rounded-5 fw-bold btn-md"
                  type="button"
                >
                  Buy Now
                </button>
                <button
                  className="btn border-2 py-2 mx-3  text-primary  btn-md border-primary rounded-5 fw-bold "
                  type="button"
                >
                  Try for Free
                </button>
              </div>
            </div>
            <div className=" mt-3 fw-bold text-body-secondary ">
              <p className="ms-4 fs-5">This course includes:</p>
              <ul className="list-group-item ms-4 list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-camera-video text-primary pe-2"></i>
                  13+ Video Lessons
                </li>

                <li className="list-group-item mt-2">
                  <i className="bi bi-file-text text-primary pe-2"></i>5+
                  Quizzes
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-file-earmark-arrow-down text-primary pe-2"></i>
                  5+ Downloadable Resources
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-person-video text-primary pe-2"></i>Live
                  Classes
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-file-medical text-primary pe-2"></i>
                  Interview Questions
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-clock text-primary pe-2"></i>Continuous
                  Updates
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-meta text-primary pe-2"></i>Lifetime
                  Access
                </li>
              </ul>
            </div>
            <div className="card-body pt-0">
              <p className="fs-6 text-center  text-body-tertiary fw-bold">
                Not sure if this course is for you?
              </p>
              <a
                href="_blank"
                className="btn w-100  border-primary btn-md Trybtn p-2 rounded-5  border-0  fw-bold  card-link"
              >
                Book a Free consultation{" "}
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ---------------small screen card end---------- */}
        <div
          className="col-lg-8    col-12 ms-2"
          // style={{ height: "700px" }}
        >
          <div className="sysinfocard px-lg-2 px-1 px-lg-1  col-lg-11  mt-5 pt-3    text-dark  rounded-2 ">
            <h2 className=" fw-bolder ">What you'll learn?</h2>
            <div className="d-flex justify-content-between row row-cols-lg-2 ">
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  Understand the ideal candidate qualities interviewers seek
                </p>
              </div>
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  Articulate your experiences effectively for mapping
                  competencies
                </p>
              </div>
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  Master the structured behavioral interview technique,
                  including STAR pattern
                </p>
              </div>
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  Discover the benefits and drawbacks of STAR method
                </p>
              </div>
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  Present data and details to showcase competencies
                </p>
              </div>
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  See how leadership and ownership competencies are assessed in
                  a sample interview.
                </p>
              </div>
            </div>
            <p className="text-center text-primary pointer-event fw-bold ">
              Read More
            </p>
          </div>
          {/* -------------------------------------------- */}

          <div className=" mt-5 ms-3   text-dark  rounded-2 ">
            <h2>Course Content</h2>
            {contentdata.map((curElem1) => {
              const { id, title } = curElem1;

              return (
                <>
                  <div className="" key={curElem1}>
                    <ul className="list-unstyled m-0">
                      <li
                        className=" content bg-body-secondary rounded-2 p-2 "
                        onClick={() => handleButtonClick(id)}
                      >
                        {title}
                      </li>
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
          {/* --------------Live classes---------- */}
          <h2 className=" ms-lg-5 mt-3  text-sm-center text-center  fw-bold  ">
            Meet Your Instructor
          </h2>
          <div className="d-flex row row-cols-1 row-cols-lg-2">
            <div className="col-lg-4 col-12 text-center">
              <img
                src="img/roundcardphoto3.jpeg"
                className="GauracSenInstructor  rounded-circle  "
                alt="img"
              />
            </div>

            <div className="mt-3 text-center  text-sm-center  col-lg-7 col-12">
              <h3>Ashis Sen</h3>
              <p>Executive Coach, Adjunct Professor IIM Nagpur (HRM & OB)</p>
              <p>
                Dr. Ashis Sen is a subject matter expert on behavioural
                interviews and competency assessment. He is a visiting faculty
                at IIM Nagpur, and has been a guest lecturer at top management
                institutes like IIM-Lucknow, NMIMS, and TISS.
              </p>
              <div className=" d-flex fs-3 ">
                <i class="bi bi-linkedin "></i>
                <i class="bi bi-youtube mx-3"></i>
                <i class="bi bi-twitter"></i>
              </div>
            </div>
          </div>
          {/* -------------------Questionssss------ */}
          <div className="my-5 mx-4 ">
            <h2 className="text-center fs-1 fw-bold text-primary ">
              Frequently Asked Questions
            </h2>
            <div className="mt-5 row col-lg-12 mx-lg-5">
              {rowData2.map((curElem2) => {
                const { id, curText, HidenText } = curElem2;

                return (
                  <>
                    <div
                      className="bgprimay  w-100  pt-3 mt-3 rounded-3 fs-5 fw-medium  "
                      key={curElem2}
                    >
                      {curText}
                      <button
                        class="bi bi-plus-square   fs-2  fw-medium  border-0 text-primary me-2  bgprimay  float-end "
                        onClick={() => handleButtonClick2(id)}
                      >
                        {/* {expandedCard === id ? " " : " "} */}
                      </button>
                      {expandedCard2 === id && (
                        <p className=" mt-2 ">{HidenText}</p>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* ----------------card---------------- */}
        <div className="card01   d-none d-lg-block   col-lg-3 col-12">
          <div className="card   cardswidthSDY border-1 border-primary    CourseCard ">
            <video
              className="img-fluid m-2  rounded-2 "
              poster="img/cardphoto3.jpeg"
              controls
              src="img/Intro.mp4"
            ></video>
            <div className="card-body">
              <h5 className="card-title fw-bold d-block d-lg-none fs-2">
                System Design Simplified
              </h5>
              <div className=" d-flex gap-3 fw-bold d-block d-lg-none">
                <p>
                  <i className="bi bi-star-fill text-warning me-2 "></i>4.48
                  (9887)
                </p>
                <p>
                  <i className="bi bi-people-fill"></i> 19153+ Students
                </p>
              </div>
              <p className="card-text  d-block d-lg-none">
                An A-Z video course on system design patterns and best
                practices. This course ranges from basic concepts like routing,
                load balancing and caching to advanced concepts like
                concurrency, separation of concerns, and design tradeoffs.
              </p>
            </div>
            <div className="ms-3">
              <a
                href="_blank"
                className="text-primary text-decoration-none fs-6"
              >
                <b>
                  <y className="text-dark ">Buy for</y> 70% OFF
                </b>
              </a>
              <p className="text-dark   fw-bold fs-4">
                ₹1,197.00
                <y className="fw-lighter text-secondary text-decoration-line-through">
                  ₹3,990.00
                </y>
              </p>
            </div>
            <div className=" ">
              <div className="d-grid gap-2 ">
                <button
                  className="btn btn-primary mx-3  py-2 rounded-5 fw-bold btn-md"
                  type="button"
                >
                  Buy Now
                </button>
                <button
                  className="btn border-2 py-2 mx-3  text-primary  btn-md border-primary rounded-5 fw-bold "
                  type="button"
                >
                  Try for Free
                </button>
              </div>
            </div>
            <div className=" mt-3 fw-bold text-body-secondary ">
              <p className="ms-4 fs-5">This course includes:</p>
              <ul className="list-group-item ms-4 list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-camera-video text-primary pe-2"></i>
                  13+ Video Lessons
                </li>

                <li className="list-group-item mt-2">
                  <i className="bi bi-file-text text-primary pe-2"></i>5+
                  Quizzes
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-file-earmark-arrow-down text-primary pe-2"></i>
                  5+ Downloadable Resources
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-person-video text-primary pe-2"></i>Live
                  Classes
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-file-medical text-primary pe-2"></i>
                  Interview Questions
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-clock text-primary pe-2"></i>Continuous
                  Updates
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-meta text-primary pe-2"></i>Lifetime
                  Access
                </li>
              </ul>
            </div>
            <div className="card-body pt-0">
              <p className="fs-6 text-center  text-body-tertiary fw-bold">
                Not sure if this course is for you?
              </p>
              <a
                href="_blank"
                className="btn w-100  border-primary btn-md Trybtn p-2 rounded-5  border-0  fw-bold  card-link"
              >
                Book a Free consultation{" "}
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* --------------comments------------------------------------- */}
      <div className="CommentsCards m-2 m-md-5  bgprimay  bg-opacity-6  rounded-3 p-3 ">
        <h2 className=" fw-bold  text-center text-primary">
          A Software Engineer’s <br /> Best kept Secret
        </h2>
        <p className="text-center fs-6 text-secondary-emphasis">
          Our courses have helped thousands of <br /> engineers, get their dream
          job at their dream companies.
        </p>
        <div
          className="row row-cols-md-2 row-cols-xl-3 d-md-flex m-1 justify-content-center m-md-3 overflow-y-scroll overflow-hidden "
          style={{ height: "600px" }}
        >
          {/* -------------------card 1----------------- */}

          {apiData.map((curElem) => {
            const { name, bio, image, description } = curElem;

            return (
              <>
                <div className="card mt-3 p-0 col-md-5 mx-4" key={curElem}>
                  <div className="card-body">
                    <div className="d-flex row row-cols-2">
                      <img
                        src={image}
                        className="img-fluid rounded-start-circle rounded-end-circle  col-3"
                        alt="img"
                      />
                      <p className="card-title fs-4 fw-bold  col-9">
                        {name}
                        <p className="card-subtitle cmtcardbio mb-2 text-body-secondary">
                          {bio}
                        </p>
                      </p>
                    </div>

                    <p className="card-text mt-2">
                      <p>
                        <i class="bi bi-star-fill text-warning me-1"></i>
                        <i class="bi bi-star-fill text-warning me-1"></i>
                        <i class="bi bi-star-fill text-warning me-1"></i>
                        <i class="bi bi-star-fill text-warning me-1 "></i>
                        <i class="bi bi-star-fill text-warning"></i>
                      </p>
                      {description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className=" m-3 m-md-5 ">
        <div className=" bg-primary  py-3  rounded-3">
          <div className=" text-center d-flex justify-content-center ">
            <h1 className=" mt-md-5  text-light fw-bold">
              Get InterviewReady <br /> Now! <br />
              <button
                type="button"
                class="btn mt-md-5 mt-3  bg-light-subtle  rounded-3  px-5  text-primary  btn-lg"
              >
                Start Learning
              </button>
            </h1>

            <img
              src="img/cmt/gk_333.png"
              className="img-fluid pngimg  d-none d-md-block"
              alt="pngimg"
            />
          </div>
        </div>
      </div>
      {/* ----------footer---------------------- */}
      <Footer />
    </>
  );
}

export default Behavioural;
