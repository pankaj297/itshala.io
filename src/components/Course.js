import React from 'react';

function Course() { 
 
  
  return (
    <>
      {/* ----------------------------card 1-------------------------------- */}
      <div className="bgprimay pt-5 m-3 rounded-4">
        <p className="CardTopTextP fs-5 m-2  text-center">
          Master Every Concept. Every Term. Every Detail
        </p>
        <h3 className="CardTopText fs-1 m-3 fw-bold text-center text-primary">
          High Quality Video Lessons
        </h3>
        {/* ---------card--------- */}
        <div className="cardss m-2  justify-content-center  row row-cols-lg-2 row-cols-xxl-3  p-sm-5 row-cols-xxl-2 g-3">
          <div className="card mx-3 col-lg-5  col-xl-4 CourseCard border-0">
            <img
              src="img/thumbnailFvideo.png"
              className="img-fluid rounded-2  card-img-top my-2"
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">System Design Simplified</h5>
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
              <p className="card-text  d-none d-sm-block">
                An A-Z video course on system design patterns and best
                practices. This course ranges from basic concepts like routing,
                load balancing and caching to advanced concepts like
                concurrency, separation of concerns, and design tradeoffs.
              </p>
            </div>
            <ul className="list-group-item ms-3  list-group-flush">
              <li className="list-group-item">
                <i className="bi bi-camera-video text-primary pe-2"></i>
                285+ Video Lessons
              </li>

              <li className="list-group-item mt-2">
                <i className="bi bi-file-text text-primary pe-2"></i>44+ Quizzes
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-file-earmark-arrow-down text-primary pe-2"></i>
                64+ Downloadable Resources
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-person-video text-primary pe-2"></i>Live Classes
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-file-medical text-primary pe-2"></i>Interview
                Questions
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-clock text-primary pe-2"></i>Continuous Updates
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-meta text-primary pe-2"></i>Lifetime Access
              </li>
            </ul>
            <div className="card-body ">
              <p className=" mb-0  text-decoration-none">
                Buy for 50% OFF
              </p>
              <div className="text-dark mt-0  fw-bold">
                ₹7,995.00{" "}
                <a href="/" className="fw-lighter text-secondary text-decoration-line-through">
                  ₹15,990.00
                </a>
              </div>
              <a href="/"
                className="btn mt-2  w-100  border-primary  border-2 fw-bold   text-primary "
              >
                Learn More <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* ------------------card 2---------------- */}

          <div className="card col-lg-5  col-xl-4 CourseCard border-0 ">
            <img
              src="img/cardphoto2.jpeg"
              className="img-fluid my-2 rounded-2  card-img-top"
              alt="img"
            />
            <div className="card-body ">
              <h5 className="card-title fw-bold ">Data Structures & Algorithms</h5>
              <div className="mt-1 d-flex justify-content-between w-25 w-xs-25">
                <p className=" bg-primary-subtle   p-1 rounded">SDE1</p>
                <p className=" bg-primary-subtle   mx-2  p-1 rounded">SDE2</p>
                <p className=" bg-primary-subtle   p-1 rounded">SDE3</p>
              </div>
              <div className="roundPhoto1">
                <img
                  src="img/roundcardphoto2.jpeg"
                  className="roundimg1 rounded-5 pb-1 "
                  alt="img"
                />{" "}
                Benyam Ephrem
              </div>
              <p className="card-text  d-none d-sm-block">
                A rapid ramp-up on the fundamentals of data structures and
                algorithms applied to interviews. Learn repeatable
                problem-solving patterns for finding,& analyzing. Additionally,
                gain a rock-solid foundation in all interview data structures.
              </p>
            </div>
            <ul className="list-group-item ms-3  list-group-flush">
              <li className="list-group-item">
                <i className="bi bi-camera-video text-danger  pe-2"></i>
                285+ Video Lessons
              </li>

              <li className="list-group-item mt-2">
                <i className="bi bi-file-earmark-code text-danger  pe-2 "></i>Full
                Coding Environment
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-file-earmark-pdf text-danger  pe-2 "></i>Optimal
                Solutions
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-clock text-danger  pe-2"></i>Continuous Updates
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-alexa text-danger  pe-2 "></i>AI Assistant
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-meta  text-danger  pe-2"></i>Lifetime Access
              </li>
            </ul>

            <div className="card-body">
              <p  className=" mb-0   text-decoration-none">
                Buy for 50% OFF
              </p>
              <div className="text-dark fw-bold">
                ₹6,490.00{" "}
                <a href="/" className="fw-lighter text-secondary text-decoration-line-through">
                  ₹12,980.00
                </a>
              </div>
              <a href="/"
                className="btn mt-2 w-100 fw-bold border-danger  border-2  text-danger  card-link"
              >
                Learn More <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* ------------------------card 3 ------------------------------ */}
          <div className="card col-lg-5  col-xl-4 CourseCard border-0 ">
            <img
              src="img/cardphoto3.jpeg"
              className="img-fluid my-2 rounded-2  card-img-top"
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Behavioural Interviews</h5>
              <div className="mt-1 d-flex justify-content-between w-25 w-xs-25">
                <p className=" bg-primary-subtle  p-1 rounded">SDE1</p>
                <p className=" bg-primary-subtle mx-2  p-1 rounded">SDE2</p>
                <p className=" bg-primary-subtle   p-1 rounded">SDE3</p>
              </div>
              <div className="roundPhoto1">
                <img
                  src="img/roundcardphoto3.jpeg"
                  className="roundimg1   rounded-5  "
                  alt="img"
                />{" "}
                Ashis Sen
              </div>
              <p className="card-text  d-none d-sm-block">
                This course is for professionals with 0 to 10 years of
                experience who is applying for a job and looking to ace their
                behavioral interviews. The facilitator, Dr. Ashis Sen, is a
                subject matter expert on competency-based interviewing.
              </p>
            </div>
            <ul className="list-group-item ms-3  list-group-flush">
              <li className="list-group-item">
                <i className="bi bi-camera-video text-info pe-2"></i>
                13+ Video Lessons
              </li>

              <li className="list-group-item mt-2">
                <i className="bi bi-file-text text-info pe-2"></i>5+ Quizzes
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-file-earmark-arrow-down text-info pe-2"></i>
                5+ Downloadable Resources
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-person-video text-info pe-2"></i>Live Classes
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-file-medical text-info pe-2"></i>Interview
                Questions
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-clock text-info pe-2"></i>Continuous Updates
              </li>

              <li className="list-group-item pt-2">
                <i className="bi bi-meta text-info pe-2"></i>Lifetime Access
              </li>
            </ul>

            <div className="card-body ">
              <p className="  d-flex  mb-0  text-decoration-none"> 
                   Buy for  50% OFF
              </p>
              <div className="text-dark mt-0  fw-bold">
                ₹1,995.00
                <a href="/" className="fw-lighter text-secondary text-decoration-line-through">
                  ₹3,990.00
                </a>
              </div>
              <a href="/"
                className="btn w-100 mt-2   fw-bold   border-info border-2  text-info "
              >
                Learn More <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
