import React, { useState } from "react";
import QData3 from "./questiondata3";
import Demo from "./ademoapi";
import Header from "./header";
import Comments from "./comments";
import Getinterviewcard from "./getinterviewcard";
import Footer from "./Footer";


function DataStructure() {
  
  const [contentdata] = useState(Demo);

  // strict equality operator

  const [expandedCard, setExpandedCard] = useState(null);

  const handleButtonClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };


  const [rowData3] = useState(QData3);


  //  strict equality operator

  const [expandedCard3, setExpandedCard3] = useState(null);

  const handleButtonClick3 = (cardId3) => {
    setExpandedCard3(expandedCard3 === cardId3 ? null : cardId3);
  };

   function signpage() {
     window.location = "/signin";
   }

  return (
    <>
      {/* -----------nav bar----------- */}
      <Header />
      {/* -----nav end--------- */}
      <div className="bigsecontion overflow-y-visible  overflow-scroll">
        <div className="SDScards d-none d-lg-block">
          <div className="course1 d-flex">
            <div className="SDSblue p-4 col-lg-8">
              <div className=" mx-5 pb-5 d-none d-lg-block ">
                <h1 className=" fw-bolder  mt-4 ">
                  Data Structures & Algorithms
                </h1>
                <p className=" fw-medium  fs-5">
                  A rapid ramp-up on the fundamentals of data structures and
                  algorithms applied to interviews. Learn repeatable
                  problem-solving patterns for finding, analyzing, & refining
                  solutions. Additionally, gain a rock-solid foundation in all
                  interview data structures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 container-fluid   row-cols-lg-2  ">
          {/* ------------small screen card---- */}

          <div className=" smcard d-block d-lg-none ms-2">
            <div className="card  cardswidthSDY border-1 border-primary    CourseCard ">
              <video
                className="img-fluid  rounded-2 "
                poster="img/cardphoto2.jpeg"
                controls
                src="img/Intro.mp4"
              ></video>
              <div className="card-body">
                <h5 className="card-title fw-bold d-block d-lg-none fs-3">
                  Data Structures & Algorithms
                </h5>
                <p className="card-text  d-block d-lg-none">
                  A rapid ramp-up on the fundamentals of data structures and
                  algorithms applied to interviews. Learn repeatable
                  problem-solving patterns for finding, analyzing, & refining
                  solutions. Additionally, gain a rock-solid foundation in all
                  interview data structures.
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
                <p className="text-dark    fw-bold fs-4">
                  ₹3,894.00
                  <y className="fw-lighter ms-3 text-secondary text-decoration-line-through">
                    ₹12,980.00
                  </y>
                </p>
              </div>
              <div className=" ">
                <div className="d-grid gap-2 ">
                  <button
                    onClick={signpage}
                    className="btn btn-primary mx-3  py-2 rounded-5 fw-bold btn-md"
                    type="button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className=" mt-3 fw-bold text-body-secondary ">
                <p className="ms-4 fs-5">This course includes:</p>
                <ul className="list-group-item ms-4 list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-camera-video  text-primary  pe-2"></i>
                    150+ Video Lessons
                  </li>

                  <li className="list-group-item mt-2">
                    <i className="bi bi-file-earmark-code  text-primary   pe-2 "></i>
                    Full Coding Environment
                  </li>

                  <li className="list-group-item pt-2">
                    <i className="bi bi-file-earmark-pdf text-primary   pe-2 "></i>
                    Optimal Solutions
                  </li>

                  <li className="list-group-item pt-2">
                    <i className="bi bi-clock  text-primary   pe-2"></i>Continuous
                    Updates
                  </li>

                  <li className="list-group-item pt-2">
                    <i className="bi bi-alexa  text-primary   pe-2 "></i>AI
                    Assistant
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
                    Learn all of the core data structures used in interviews.
                  </p>
                </div>
                <div className="col-lg-5 d-flex ">
                  <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                  <p className="">
                    Learn key interview algorithms & how to identify their
                    use-cases.
                  </p>
                </div>
                <div className="col-lg-5 d-flex ">
                  <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                  <p className="">
                    Gain a deep understanding of analyzing & incrementally
                    refining your solutions.
                  </p>
                </div>
                <div className="col-lg-5 d-flex ">
                  <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                  <p className="">
                    Gain core framework for approaching & breaking-down any
                    interview problem (even those you have never seen before).
                  </p>
                </div>
                <div className="col-lg-5 d-flex ">
                  <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                  <p className="">
                    Gain a rock-solid grasp of trickier topics like recursion,
                    dynamic programming, graphs, & more.
                  </p>
                </div>
              </div>
              <p className="text-center text-primary pointer-event fw-bold ">
                Read More
              </p>
            </div>
            {/* -----------------course content--------------------------- */}
            <div className=" mt-5    text-dark  rounded-2 ">
              <h2 className="fw-bold ms-lg-5">Course Content</h2>
              {contentdata.map((curElem1) => {
                const { id, title } = curElem1;

                return (
                  <>
                    <div className="" key={curElem1}>
                      <ul className="list-unstyled m-0 mx-lg-4 ">
                        <li
                          className=" content bg-body-secondary rounded-2 p-2 "
                          onClick={() => handleButtonClick(id)}
                        >
                          {title}
                        </li>
                        <li></li>
                      </ul>
                    </div>
                  </>
                );
              })}
            </div>
            {/* ------------ Meet Your Instructor--------- */}
            <h2 className=" ms-lg-5 mt-4  text-sm-center text-center  fw-bold  ">
              Meet Your Instructor
            </h2>
            <div className="d-flex row row-cols-1 row-cols-lg-2">
              <div className="col-lg-4 col-12 text-center">
                <img
                  src="img/roundcardphoto2.jpeg"
                  className="GauracSenInstructor  rounded-circle  "
                  alt="img"
                />
              </div>

              <div className="mt-3 text-center  text-sm-center  col-lg-7 col-12">
                <h3 className="fw-bold ">Benyam Ephrem</h3>
                <p className=" fw-bold text-body-secondary ">
                  {" "}
                  Ex Software Engineer @ Twitter
                </p>
                <p className=" fw-bold text-body-secondary ">
                  {" "}
                  Benyam Ephrem was previously founder of Back to Back SWE,
                  where he grew a YouTube channel teaching Data Structures &
                  Algorithms to 200,000+ subscribers. Ben has taught over 400+
                  video lessons on DS/A. Formerly an engineer on the twitter.com
                  team, today he runs interviewpen.com full-time.
                </p>
                <div className=" justify-content-center gap-4 d-flex fs-2 ">
                  <i className="bi bi-linkedin "></i>
                  <i className="bi bi-youtube mx-3"></i>
                  <i className="bi bi-twitter"></i>
                </div>
              </div>
            </div>
            {/* -------------------Questionssss------ */}

            <div className="my-5 mx-1 mx-lg-5 ">
              <h2 className="text-center fs-1 fw-bold text-primary ">
                Frequently Asked Questions
              </h2>
              <div className="mt-5 row col-lg-12 mx-lg-5">
                {rowData3.map((curElem3) => {
                  const { id, curText, HidenText } = curElem3;

                  return (
                    <>
                      <div
                        className="bgprimay  w-100  pt-3 mt-3 rounded-3 fs-5 fw-medium  "
                        key={curElem3}
                      >
                        {curText}
                        <button
                          className="bi bi-plus-square   fs-2  fw-medium  border-0 text-primary me-2  bgprimay  float-end "
                          onClick={() => handleButtonClick3(id)}
                        >
                          {/* {expandedCard === id ? " " : " "} */}
                        </button>
                        {expandedCard3 === id && (
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

          {/* ----------------card lg screen---------------- */}
          <div className="card01     d-none d-lg-block   col-lg-3 col-12">
            <div className="card   cardswidthSDY border-1 border-primary    CourseCard ">
              <video
                className="img-fluid m-2  rounded-2 "
                poster="img/cardphoto2.jpeg"
                controls
                src="img/Intro.mp4"
              ></video>
              <div className="card-body">
                <h5 className="card-title fw-bold d-block d-lg-none fs-2">
                  Data Structures & Algorithms
                </h5>
                <p className="card-text  d-block d-lg-none">
                  An A-Z video course on system design patterns and best
                  practices. This course ranges from basic concepts like
                  routing, load balancing and caching to advanced concepts like
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
                  ₹3,894.00
                  <y className="fw-lighter text-secondary text-decoration-line-through">
                    ₹12,980.00
                  </y>
                </p>
              </div>
              <div className=" ">
                <div className="d-grid gap-2 ">
                  <button
                    onClick={signpage}
                    className="btn btn-primary mx-3  py-2 rounded-5 fw-bold btn-md"
                    type="button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className=" mt-3 fw-bold text-body-secondary ">
                <p className="ms-4 fs-5">This course includes:</p>
                <ul className="list-group-item ms-4 list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-camera-video  text-primary  pe-2"></i>
                    150+ Video Lessons
                  </li>

                  <li className="list-group-item mt-2">
                    <i className="bi bi-file-earmark-code  text-primary   pe-2 "></i>
                    Full Coding Environment
                  </li>

                  <li className="list-group-item pt-2">
                    <i className="bi bi-file-earmark-pdf text-primary   pe-2 "></i>
                    Optimal Solutions
                  </li>

                  <li className="list-group-item pt-2">
                    <i className="bi bi-clock  text-primary   pe-2"></i>Continuous
                    Updates
                  </li>

                  <li className="list-group-item pt-2">
                    <i className="bi bi-alexa  text-primary   pe-2 "></i>AI
                    Assistant
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
      </div>

      {/* ----------------card lg screen end---------------- */}

      {/* --------------comments------------------*/}

      <Comments />
      {/* -------comments end------------- */}

      {/* ---------Getinterviewcard ready card----- */}
      <Getinterviewcard />
      {/* ---------Getinterviewcard ready card end----- */}

      {/* ----------footer---------------------- */}
      <Footer />
    </>
  );
  
   
}




export default DataStructure;
