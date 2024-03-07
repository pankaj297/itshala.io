import React, {useState} from 'react'
import blogData from "../blogdata";
import Footer from "../Footer";
import Loginusernav from './loginusernav';

function Loguserblog() {

     const [dataBlog] = useState(blogData);
  return (
    <>
    <Loginusernav />
      <div className="blogsection ">
        <div className=" m-lg-5">
          <div className=" m-md-5">
            <div className="bg-primary m-3 m-md-5 rounded-3">
              <div className=" text-center   d-flex col row-cols-2  justify-content-center ">
                <div className=" col-6 col-md-4 text-light fw-bold">
                  <h3>
                    <p className="d-none Blogtitle">Get InterviewReady </p>
                    <br />{" "}
                    <y className="d-none d-md-block  fs-1 fw-bolder "> Blog </y>
                    <y className="d-block d-md-none fw-bolder ">Blog</y>
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

export default Loguserblog;
