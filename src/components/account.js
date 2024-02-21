import React, { useState } from 'react'
import Data from "./Api";
import { Link } from 'react-router-dom';

function Account() {
    const [apiData] = useState(Data);

    function verification() {
      alert("🎉🍾🎊 Account Create Successfully 🎉🍾🎊");
    }


  return (
    <>
      <div className="sign ">
        <div className="SignpageSec row row-cols-md-2">
          {/* -----------right card----------- */}
          <div className="leftcard  bg-primary vh-100    text-light   col-md-6 col-lg-5 d-none d-md-block d-lg-block">
            <div className="d-none  mt-md-4 d-md-block mx-md-4">
              <a className="m-3" href="_blank">
                <i className="bi bi-mortarboard-fill fs-2 text-light "></i>
              </a>
              <a className="navbar-brand fs-4 text-light" href="_blank">
                <b>INTERVIEW</b> <b className="m-2">READY</b>
              </a>
            </div>
            <h4 className="fw-bold  mt-md-2  mx-md-5">
              Achieve your dream job Today!
            </h4>
            <p className="fs-6 mt-md-4  mx-md-5">
              Master the design of large-scale distributed systems, implement
              coding design patterns, and balance consistency, availability, and
              performance tradeoffs. Learn the skills to get closer to your
              career goals. Start your journey now.
            </p>
            {/* -------------card--------            */}
            <div className="Cards  mt-md-5 mx-md-3 mx-lg-5">
              <div className=" d-flex   overflow-hidden overflow-x-scroll">
                {apiData.map((curElem) => {
                  const { name, bio, image, description } = curElem;

                  return (
                    <>
                      <div
                        className="card logcard  w-75 col-md-6 mx-md-2 my-md-5"
                        key={curElem}
                      >
                        <div className="card-body   text-white">
                          <div className="d-flex row row-cols-md-2">
                            <img
                              //  src="img/cmt/himanshu2.jpg"
                              src={image}
                              className="img-fluid rounded-start-circle rounded-end-circle  col-md-3"
                              alt="img"
                            />
                            <p className="card-title fs-4 fw-bold col-md-9">
                              {name}
                              <p className="card-subtitle cmtcardbio mb-2">
                                {bio}
                              </p>
                            </p>
                          </div>
                          <p className="card-text mt-2">{description}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          {/*---------- right card --------------- */}
          <div className="rightcard  text-center text-md-center  col-md-6 col-lg-7">
            <div className=" text-center">
              <div className="d-block d-md-none mt-5  fs-3   text-center">
                <a className="m-3 " href="_blank">
                  <i className="bi bi-mortarboard-fill fs-2 text-success"></i>
                </a>
                <a className="navbar-brand" href="_blank">
                  <b>INTERVIEW</b> <b className="m-2 text-success">READY</b>
                </a>
              </div>
              <div className="mt-5">
                <h1 className="fw-bold">Create an account</h1>
                <p>
                  Already have an account?{" "}
                  <Link to="/signin" className="text-decoration-none ">
                    Sign In
                  </Link>
                </p>
              </div>
              <div className="mediaicon  mt-5  d-flex justify-content-center">
                <a
                  href="https://www.google.com/"
                  className="mediaicons mx-2  mx-md-4  px-3 py-2  rounded-2 fs-2 bg-light text-dark"
                >
                  <i className="bi bi-google"></i>
                </a>
                <a
                  href="https://github.com/"
                  className="mediaicons mx-2  mx-md-4 px-3 py-2 rounded-2 fs-2 bg-light text-dark"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="mediaicons mx-2  mx-md-4 px-3 py-2 rounded-2 fs-2 bg-light text-dark"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="mediaicons mx-2 mx-md-4 px-3 py-2 rounded-2 fs-2 bg-light text-dark"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <div className="mt-4">
                <p className=" text-secondary fs-1 ">
                  ----------- <b className="fw-bold text-dark fs-3">OR</b>{" "}
                  ------------
                </p>
              </div>

              <div className="d-flex justify-content-center row row-cols-1">
                <div className="form-floating bod fw-bold  text-secondary  col-10  col-lg-7 mb-3">
                  <input
                    type="name"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Full Name</label>
                </div>

                <div className="form-floating bod fw-bold  text-secondary  col-10  col-lg-7 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>

                <div className="form-floating bod fw-bold text-secondary  col-10 col-lg-7 ">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <Link
                  to="/"
                  onClick={() => verification()}
                  className="btn btn-primary fs-5 col-9 col-lg-6  me-2  mt-3 p-3"
                  type="button"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
