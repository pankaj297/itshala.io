import React from "react";
import Loginusernav from "./loginusernav";
import { Link } from "react-router-dom";

function Yourcourse() {
  return (
    <>
      <Loginusernav />
      <div className="yourcourse">
        <div className="ysearch m-3 m-md-5">
          <label for="exampleDataList " className="form-label fs-3 ">
            Courses
          </label>
          <input
            className="form-control p-2"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Search your courses..."
          />
          <datalist id="datalistOptions">
            <option value="data structure" />
            <option value="system design" />
            <option value="Behavioural" />
          </datalist>
        </div>
        {/* ----------------card section--------------- */}
        <div className="yourcoursecardsec">
          <div className="m-md-5 m-3  pt-3 ">
            <h3>Your Courses</h3>
            <p>All your enrolled courses at one place</p>
          </div>
          <div className="">
            <div className="cardss m-5   justify-content-center  row row-cols-md-2 row-cols-xxl-3   row-cols-xxl-3 g-1">
              <div className="card mt-3 cardshowdo m-1 col-md-6 p-2  col-xl-4 CourseCard border-0">
                <img
                  src="img/thumbnailFvideo.png"
                  className="img-fluid rounded-2  card-img-top  my-2 "
                  alt="img"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    System Design Simplified
                  </h5>
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
                    practices. This course ranges from basic concepts like
                    routing, load balancing and caching to advanced concepts
                    like concurrency, separation of concerns, and design
                    tradeoffs.
                  </p>
                </div>
                <div className="card-body ">
                  <p className=" mb-0  text-decoration-none">Buy for 50% OFF</p>
                  <div className="text-dark mt-0  fw-bold">
                    ₹7,995.00{" "}
                    <a
                      href="/"
                      className="fw-lighter text-secondary text-decoration-line-through"
                    >
                      ₹15,990.00
                    </a>
                  </div>
                  <Link
                    to="/selectcourse"
                    className="btn mt-2  w-100  border-primary  border-2 fw-bold   text-primary "
                  >
                    Buy Now <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>

              {/* ------------------card 2---------------- */}

              <div className="card cardshowdo mt-3 ms-2  p-2  col-md-6  col-xl-4 CourseCard border-0 ">
                <img
                  src="img/cardphoto2.jpeg"
                  className="img-fluid my-2 rounded-2  card-img-top"
                  alt="img"
                />
                <div className="card-body ">
                  <h5 className="card-title fw-bold ">
                    Data Structures & Algorithms
                  </h5>
                  <div className="mt-1 d-flex justify-content-between w-25 w-xs-25">
                    <p className=" bg-primary-subtle   p-1 rounded">SDE1</p>
                    <p className=" bg-primary-subtle   mx-2  p-1 rounded">
                      SDE2
                    </p>
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
                    problem-solving patterns for finding,& analyzing.
                    Additionally, gain a rock-solid foundation in all interview
                    data structures.
                  </p>
                </div>

                <div className="card-body">
                  <p className=" mb-0   text-decoration-none">
                    Buy for 50% OFF
                  </p>
                  <div className="text-dark fw-bold">
                    ₹6,490.00
                    <a
                      href="/"
                      className="fw-lighter text-secondary text-decoration-line-through"
                    >
                      ₹12,980.00
                    </a>
                  </div>
                  <Link
                    to="/selectcourse"
                    className="btn mt-2 w-100 fw-bold border-danger  border-2  text-danger  card-link"
                  >
                    Buy Now <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
              {/* ------------------------card 3 ------------------------------ */}
              <div className="card cardshowdo   mt-3 p-2 col-md-6  col-xl-4 CourseCard border-0 ">
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
                    experience who is applying for a job and looking to ace
                    their behavioral interviews. The facilitator, Dr. Ashis Sen,
                    is a subject matter expert on competency-based interviewing.
                  </p>
                </div>
                <div className="card-body ">
                  <p className="  d-flex  mb-0  text-decoration-none">
                    Buy for 50% OFF
                  </p>
                  <div className="text-dark mt-0  fw-bold">
                    ₹1,995.00
                    <a
                      href="/"
                      className="fw-lighter text-secondary text-decoration-line-through"
                    >
                      ₹3,990.00
                    </a>
                  </div>
                  <Link
                    to="/selectcourse"
                    className="btn w-100 mt-2  fw-bold   border-info border-2  text-info "
                  >
                    Buy Now <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Yourcourse;
