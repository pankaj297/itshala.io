import React, {useState} from 'react'
import QData from "./Qestiondata";


function Faqs() {
  const [rowData] = useState(QData);

  //  strict equality operator

  const [expandedCard, setExpandedCard] = useState(null);

  const handleButtonClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <>
      {/* ----------------------------Asked Qestion section---------------------- */}
      <div className="my-5 mx-3 mx-md-5" >
        <h2 className="text-center fs-1 fw-bold text-success">
          Frequently Asked Questions
        </h2>
        <div className="mt-5">
          {rowData.map((curElem1) => {
            const { id, curText, HidenText } = curElem1;

            return (
              <>
                <div
                  className=" bg-primary-subtle pe-2 p-3 mt-3 rounded-3"
                  key={curElem1}
                >
                  {curText}
                  <button
                    class="bi bi-plus-square   fs-5 border-0 text-primary me-2  bg-primary-subtle   float-end "
                    onClick={() => handleButtonClick(id)}
                  >
                    {/* {expandedCard === id ? " " : " "} */}
                  </button>
                  {expandedCard === id && <p className=" mt-2 ">{HidenText}</p>}
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="Liveclass my-4 py-3  p-lg-3  rounded-3 bg-body-secondary  mx-3 mx-md-5 text-center ">
        <h3 className="LiveClasses fw-bold text-success">Live Classes</h3>
        <h5 className="livetext text-center text-secondary-emphasis">
          Watch Gaurav resolve doubts for enrolled users
        </h5>
        <div className="">
          <video
            className="img-fluid video2  w-50  w-75    rounded-2 "
            poster="img/cardphoto1.jpeg"
            controls
            src="img/Intro.mp4"
          ></video>
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

      <hr className="m-3 m-md-5  fw-bold text-dark " />
    </>
  );
}

export default Faqs;
