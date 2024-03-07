import React, {useState} from 'react'
import Content from "../coursecontent";
import Comments from "../comments";
import Footer from "../Footer";
import QData4 from "../questiondata4";
import Getinterviewcard from "../getinterviewcard";
import { Link } from "react-router-dom";
import Loginusernav from './loginusernav';

function LogBinterviews() {

     const [contentdata] = useState(Content);

     // strict equality operator

     const [expandedCard, setExpandedCard] = useState(null);

     const handleButtonClick = (cardId) => {
       setExpandedCard(expandedCard === cardId ? null : cardId);
     };

     const [rowData4] = useState(QData4);

     //  strict equality operator

     const [expandedCard4, setExpandedCard4] = useState(null);

     const handleButtonClick4 = (cardId4) => {
       setExpandedCard4(expandedCard4 === cardId4 ? null : cardId4);
     };


  return (
    <>
      <Loginusernav />
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
        <div className="card01 smcard d-block d-lg-none ms-2">
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
                <Link
                  to="/selectcourse"
                  className="btn btn-primary mx-3  py-2 rounded-5 fw-bold btn-md"
                  type="button"
                >
                  Buy Now
                </Link>
                <a
                  href="https://interviewready.io/learn/behavioural-interview-course/Behavioural-Intro/course-intro-behavioral"
                  className="btn border-2 py-2 mx-3  text-primary  btn-md border-primary rounded-5 fw-bold "
                  type="button"
                >
                  Try for Free
                </a>
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

        {/* ---------------What you'll learn? start------ */}
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
          {/* ---------------What you'll learn? end------ */}

          {/* --------------------course content------------------------ */}

          <div className=" mt-5    text-dark  rounded-2 ">
            <h2 className="fw-bold ms-lg-5 ">Course Content</h2>
            {contentdata.map((curElem1) => {
              const { id, title } = curElem1;

              return (
                <>
                  <div className="" key={curElem1}>
                    <ul className="list-unstyled my-0 mx-lg-4 ">
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
          {/* --------------------course content end------------------------ */}

          {/* -----------Meet Your Instructor------------- */}
          <h2 className=" ms-lg-5 mt-5  text-sm-center text-center  fw-bold  ">
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
              <h3 className="fw-bold ">Ashis Sen</h3>
              <p className=" fw-bold text-body-secondary ">
                Executive Coach, Adjunct Professor IIM Nagpur (HRM & OB)
              </p>
              <p className=" fw-bold text-body-secondary ">
                Dr. Ashis Sen is a subject matter expert on behavioural
                interviews and competency assessment. He is a visiting faculty
                at IIM Nagpur, and has been a guest lecturer at top management
                institutes like IIM-Lucknow, NMIMS, and TISS.
              </p>
              <div className=" justify-content-center gap-5   d-flex fs-2 ">
                <i class="bi bi-linkedin "></i>
                <i class="bi bi-youtube mx-3"></i>
                <i class="bi bi-twitter"></i>
              </div>
            </div>
          </div>
          {/* --------------Meet Your Instructor end---------- */}

          {/* -------------------Questionssss------ */}
          <div className="my-4 mx-1 mx-lg-5 ">
            <h2 className="text-center fs-1 fw-bold text-primary ">
              Frequently Asked Questions
            </h2>
            <div className="mt-5 row col-lg-12 mx-lg-5">
              {rowData4.map((curElem4) => {
                const { id, curText, HidenText } = curElem4;

                return (
                  <>
                    <div
                      className="bgprimay  w-100  pt-3 mt-3 rounded-3 fs-5 fw-medium  "
                      key={curElem4}
                    >
                      {curText}
                      <button
                        class="bi bi-plus-square   fs-2  fw-medium  border-0 text-primary me-2  bgprimay  float-end "
                        onClick={() => handleButtonClick4(id)}
                      >
                        {/* {expandedCard === id ? " " : " "} */}
                      </button>
                      {expandedCard4 === id && (
                        <p className=" mt-2 ">{HidenText}</p>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* -------------------Questionssss end------ */}

        {/* ----------------card big screen---------------- */}
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
                <Link
                  to="/selectcourse"
                  className="btn btn-primary mx-3  py-2 rounded-5 fw-bold btn-md"
                  type="button"
                >
                  Buy Now
                </Link>
                <a
                  href="https://interviewready.io/learn/behavioural-interview-course/Behavioural-Intro/course-intro-behavioral"
                  className="btn border-2 py-2 mx-3  text-primary  btn-md border-primary rounded-5 fw-bold "
                  type="button"
                >
                  Try for Free
                </a>
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
      {/* ----------------card big screen end---------------- */}

      {/* --------------comments-----------------*/}

      <Comments />

      {/*----------comments end--------- */}

      <Getinterviewcard />

      {/* ----------footer---------------------- */}
      <Footer />
    </>
  );
}

export default LogBinterviews
