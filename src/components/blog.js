import React, {useState} from "react";
import blogData from "./blogdata";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Blog() {

    const [dataBlog] = useState(blogData);

  return (
    <>
      <div className="header  bg-body-tertiary  fixed-top">
        <nav className="navbar  navbar-expand-md">
          <div className="container-fluid togglebt">
            <button
              className="ms-3  bg-body-tertiary   fs-2 border-0 d-block d-md-none"
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
                    <Link className="dropdown-item" href="/Behavioural">
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

      {/* --------------Blog section---------- */}
      <div className="blogsection ">
        <div className=" m-lg-5">
          <div className=" m-md-5">
            <div className="bg-primary m-3 m-md-5 rounded-3">
              <div className=" text-center   d-flex col row-cols-2  justify-content-center ">
                <div className=" col-6 col-md-4 text-light fw-bold">
                  <h3>
                    <p className="d-none Blogtitle">Get InterviewReady </p>
                    <br /> <y className="d-none d-md-block  fs-1"> Blog </y>
                    <y className="d-block d-md-none">Blog</y>
                  </h3>
                  <p className="Rebytext text-center    pt-md-5 ms-md-4">
                    Read by engineers at
                  </p>

                  <div className="justify-content-md-center me-md-5  fs-1 row mt-2  ">
                    <div className="Logos d-flex justify-content-between ">
                      <i className="bi bi-google m-md-2 "></i>
                      <i className="bi bi-google-play m-md-2"></i>
                      <i className="bi bi-android2 m-md-2"></i>
                      <i className="bi bi-youtube m-md-2"></i>
                    </div>
                  </div>
                </div>
                <img
                  src="img/cmt/gk_333.png"
                  className="img-fluid w-25  d-none d-md-block   col-md-8 pngimg"
                  alt="pngimg"
                />
                <img
                  src="img/cmt/gk_333.png"
                  className="img-fluid   d-block d-md-none   pngimg"
                  alt="pngimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-3 m-md-5">
        <div className="text-center">
          <p className="fw-bold  text-secondary  fs-5">
            Learn about popular engineering designs, software practices and more
            by following our blog. <br /> Let us know your thoughts at
          </p>
          <a
            href="https://mail.google.com"
            className="fs-4 text-decoration-none"
          >
            blog@interviewready.io
          </a>

          <div className="text-center mt-4 ">
            <div className="container-fluid serchblog">
              <form className="d-flex   " role="search">
                <input
                  className="form-control p-3  border-0 bg-secondary-subtle  me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="BlogCard m-3 m-md-5 ">
        <div className="row text-center ">
          {/* -----------------card---------------- */}
          {dataBlog.map((curElem3) => {
            const { name, date, title, image, description } = curElem3;

            return (
              <>
                <div
                  className="col-sm-6 container-fluid  mt-4 col-lg-4  mb-3 mb-sm-0"
                  key={curElem3}
                >
                  <div className="card blogcardsshadow border-0">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{title}</h5>
                      <p className="card-text fw-bold text-secondary">
                        {description}
                      </p>
                      <div className="">
                        <img
                          src={image}
                          className="img-fluid float-start  rounded-start-circle rounded-end-circle  col-3"
                          alt="img"
                        />
                        <div className=" d-grid pt-3 ">
                          <p className="float-start ms-2 fw-bold fs-5 ">
                            {name}
                          </p>
                          <p className=" float-start ms-1 fw-bold text-secondary ">
                            {date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {/* ------------------card2--------------- */}
        </div>
      </div>
      <hr className=" fw-bold " />
      <Footer />
    </>
  );
}

export default Blog;
