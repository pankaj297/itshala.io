import React, {useState} from 'react'
import Footer from "../Footer";
import Getinterviewcard from "../getinterviewcard";
import Comments from "../comments";
import Content from "../coursecontent";
import QData2 from "../Qestiondata2";
import Loginusernav from './loginusernav';
import { Link } from 'react-router-dom';

function LogSDS() {

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
      <Loginusernav />
      <div className="SDScards d-none d-lg-block">
        <div className="course1 d-flex">
          <div className="SDSblue p-4 col-lg-8">
            <div className=" mx-5 pb-5 d-none d-lg-block ">
              <h1 className=" fw-bolder  mt-4 ">System Design Simplified</h1>
              <p className=" fw-medium  fs-5">
                An A-Z video course on system design patterns and best
                practices. This course ranges from basic concepts like routing,
                load balancing and caching to advanced concepts like
                concurrency, separation of concerns, and design tradeoffs.
              </p>
              <p className="fs-5">
                <i className="bi bi-people-fill fs-4 "></i> 19022+ Students
                <i className="bi bi-chat-right-text-fill fs-5 mx-4  me-2 "></i>
                Last updated on 02/2024
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
              poster="img/thumbnailFvideo.png"
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
                ₹7,995.00{" "}
                <y className="fw-lighter text-secondary text-decoration-line-through">
                  ₹15,990.00
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
                  href="https://interviewready.io/learn/system-design-course/how-do-i-use-this-course/what-do-we-offer"
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
                  285+ Video Lessons
                </li>

                <li className="list-group-item mt-2">
                  <i className="bi bi-file-text text-primary pe-2"></i>44+
                  Quizzes
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-file-earmark-arrow-down text-primary pe-2"></i>
                  64+ Downloadable Resources
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
                  Learn system design fundamentals: eventual consistency,
                  routing, caching, etc.
                </p>
              </div>
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  Design large-scale distributed systems with microservices.
                </p>
              </div>
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  Convert requirements into high-level system designs.
                </p>
              </div>
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  Identify and address design tradeoffs and single points of
                  failure.
                </p>
              </div>
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  Convert engineering requirements into low-level coding and
                  design.
                </p>
              </div>
              <div className="col-lg-5 d-flex ">
                <i className="bi bi-check2 m-2 fs-4 text-primary "></i>
                <p className="">
                  Account for concurrency, request ordering, and async
                  processing.
                </p>
              </div>
            </div>
            <p className="text-center text-primary pointer-event fw-bold ">
              Read More
            </p>
          </div>
          {/* ----------------------content video---------------------- */}

          <div className=" mt-5    text-dark  rounded-2 ">
            <h2 className="ms-lg-5  fw-bold">Course Content</h2>
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
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
          {/* ----------------------content video---------------------- */}

          {/* --------------Live classes---------- */}
          <div className="Liveclass my-4 py-3  p-lg-3  rounded-3  mx-3 mx-md-5 text-center ">
            <h3 className="LiveClasses mt-md-4 fs-2 fw-bolder  text-primary ">
              Live Classes
            </h3>
            <h5 className="livetext text-center text-secondary-emphasis">
              Watch Gaurav resolve doubts for enrolled users
            </h5>
            <div className="">
              <video
                className="img-fluid video2      rounded-2 "
                poster="img/thumbnailFvideo.png"
                controls
                src="img/Intro.mp4"
              ></video>
            </div>
          </div>
          {/* --------------Live classes end---------- */}

          {/* --------------Meet Your Instructor---------- */}

          <h2 className=" ms-lg-5  text-sm-center text-center  fw-bold  ">
            Meet Your Instructor
          </h2>
          <div className="d-flex row row-cols-1 row-cols-lg-2">
            <div className="col-lg-4 col-12 text-center">
              <img
                src="img/GauracSenInstructor.webp"
                className="GauracSenInstructor  rounded-circle  "
                alt="img"
              />
            </div>

            <div className="mt-3 text-center  text-sm-center  col-lg-7 col-12">
              <h3 className=" fw-bold ">Gaurav Sen</h3>
              <p className=" fw-bold text-body-secondary ">
                {" "}
                Ex Software Engineer @ Uber, Directi
              </p>
              <p className=" fw-bold text-body-secondary ">
                {" "}
                Meet Gaurav, founder, and CEO of InterviewReady. He has a
                background in distributed systems and software engineering at
                Uber, DirectI, and Morgan Stanley. He is an expert at designing
                scalable systems, and has over 500k+ followers on his YouTube
                channel. Gaurav has spoken about distributed systems at various
                institutions like University of Houston-Texas, IIT Gandhinagar,
                and BITS Hyderabad.
              </p>
              <div className=" justify-content-center  d-flex gap-4  fs-2 ">
                <i className="bi bi-linkedin "></i>
                <i className="bi bi-youtube mx-3"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </div>
          {/* --------------Meet Your Instructor end---------- */}

          {/* -------------------Questionssss------ */}
          <div className="my-4 mx-1 me-lg-5  ">
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
                        className="bi bi-plus-square   fs-2  fw-medium  border-0 text-primary me-2  bgprimay  float-end "
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
        {/* -------------------Questionssss end------ */}

        {/* ----------------card lg screen---------------- */}
        <div className="card01   d-none d-lg-block   col-lg-3 col-12">
          <div className="card   cardswidthSDY border-1 border-primary    CourseCard ">
            <video
              className="img-fluid m-2  rounded-2 "
              poster="img/thumbnailFvideo.png"
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
                ₹7,995.00{" "}
                <y className="fw-lighter text-secondary text-decoration-line-through">
                  ₹15,990.00
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
                  href="https://interviewready.io/learn/system-design-course/how-do-i-use-this-course/what-do-we-offer"
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
                  285+ Video Lessons
                </li>

                <li className="list-group-item mt-2">
                  <i className="bi bi-file-text text-primary pe-2"></i>44+
                  Quizzes
                </li>

                <li className="list-group-item pt-2">
                  <i className="bi bi-file-earmark-arrow-down text-primary pe-2"></i>
                  64+ Downloadable Resources
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
      {/* ----------------card lg screen end---------------- */}

      {/* --------------comments----------------- */}
      <Comments />
      {/* --------------comments end----------------- */}

      <Getinterviewcard />

      {/* ----------footer---------------------- */}
      <Footer />
    </>
  );
}

export default LogSDS;
