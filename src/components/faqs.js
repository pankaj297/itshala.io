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
      <div className="my-5 mx-4 mx-lg-5 mx-md-5">
        <h2 className="text-center fs-1 fw-bold text-primary ">
          Frequently Asked Questions
        </h2>
        <div className="mt-5 row col-lg-12 mx-lg-5">
          {rowData.map((curElem1) => {
            const { id, curText, HidenText } = curElem1;

            return (
              <>
                <div
                  className="bgprimay col-lg-5 me-3 p-3 mt-3 rounded-3"
                  key={curElem1}
                >
                  {curText}
                  <button
                    class="bi bi-plus-square   fs-5 border-0 text-primary me-2  bgprimay  float-end "
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
      

      <div className="Liveclass my-4 py-3  p-lg-3  rounded-3 bgprimay  mx-3 mx-md-5 text-center ">
        <h3 className="LiveClasses mt-md-4 fs-2 fw-bolder  text-primary ">Live Classes</h3>
        <h5 className="livetext text-center text-secondary-emphasis">
          Watch Gaurav resolve doubts for enrolled users
        </h5>
        <div className="">
          <video
            className="img-fluid video2  w-50  w-75    rounded-2 "
            poster="img/thumbnailFvideo.png"
            controls
            src="img/Intro.mp4"
          ></video>
        </div>
      </div>

      

    
    </>
  );
}

export default Faqs;
