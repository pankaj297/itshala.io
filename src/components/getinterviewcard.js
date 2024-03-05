import React from 'react'

function Getinterviewcard() {
  return (
    <>
      <div className=" m-3 m-md-5 ">
        <div className=" bg-primary  py-3  rounded-3">
          <div className=" text-center d-flex justify-content-center ">
            <h1 className=" mt-md-5  text-light fw-bold">
              Get InterviewReady <br /> Now! <br />
              <button
                type="button"
                className="btn mt-md-5 mt-3  bg-light-subtle  rounded-3  px-5  text-primary  btn-lg"
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
      <hr className="m-3 m-md-5  fw-bold text-dark " />
    </>
  );
}

export default Getinterviewcard;
