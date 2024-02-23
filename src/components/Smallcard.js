import React, {useState} from  'react'


function Smallcard() {

const [expandedCard, setExpandedCard] = useState(null);

const handleButtonClick = (cardId) => {
  setExpandedCard(expandedCard === cardId ? null : cardId);
};
  



  
  return (
    <>
      <div className="smallcards3 m-3 mt-5  m-md-5">
        <p className="SmcardTextTop1 text-center fs-5">
          You don't need 3 months to prepare for an interview.
        </p>
        <h1 className="SmcardTextTop2 text-center fw-bold text-success ">
          More than just watching videos
        </h1>
        <div className="row mt-5">
          {/* ------------small card 1 ----------------------------------*/}
          <div className=" container-fluid col-md-6 col-lg-4 mb-3 mb-sm-0 mt-3">
            <div className="card bg-success-subtle border-0">
              <div className="card-body ">
                <div className="d-flex">
                  <div className=" bg-success  col-3 col-md-3  col-sm-2 rounded-3">
                    <img
                      src="img/smallcard1.svg"
                      className="img-fluid  align-self-center ms-auto me-auto mt-3 d-block"
                      alt="img"
                    />
                  </div>
                  <h5 className="card-title fw-bold   row-col-6 container-fluid  float-end mt-4">
                    Lifetime Validity
                  </h5>
                  <button
                    className="button1 border-0  text-success  bg-success-subtle bi bi-arrow-down-circle-fill d-block d-md-none mt-3"
                    onClick={() => handleButtonClick(1)}
                  >
                    {expandedCard === 1 ? " " : " "}
                  </button>
                </div>
                <p className="card-text d-none d-md-block">
                  Your learning has no deadlines! Re-watch and revise as many
                  times as you want.
                </p>
                {expandedCard === 1 && (
                  <p className="card-text-small mt-2  d-md-none">
                    Your learning has no deadlines! Re-watch and revise as many
                    times as you want.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* -------------small card 2 ----------- */}
          <div className=" container-fluid  col-md-6 col-lg-4 mb-3 mb-sm-0 mt-3">
            <div className="card">
              <div className="card-body bg-danger-subtle">
                <div className="d-flex">
                  <div className=" bg-danger  col-3 col-md-3  col-sm-2 rounded-3">
                    <img
                      src="img/smallcard2.svg"
                      className="img-fluid  align-self-center ms-auto me-auto mt-3 d-block"
                      alt="img"
                    />
                  </div>
                  <h5 className="card-title fw-bold  smcardtitle2 row-col-9 container-fluid  float-end mt-4">
                    Unlimited Zoom Class
                  </h5>
                  <button
                    className="border-0  bg-danger-subtle  text-danger  bi bi-arrow-down-circle-fill  d-block d-md-none mt-3"
                    onClick={() => handleButtonClick(2)}
                  >
                    {expandedCard === 2 ? " " : " "}
                  </button>
                </div>
                <p className="card-text d-none d-md-block">
                  Our instructors join you with live classes! Ask all of your
                  questions freely.
                </p>

                {expandedCard === 2 && (
                  <p className="card-text-small d-md-none">
                    Our instructors join you with live classes! Ask all of your
                    questions freely.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ----------------small card 3 ------------- */}
          <div className=" container-fluid col-md-6 col-lg-4 mb-3 mb-sm-0 mt-3">
            <div className="card">
              <div className="card-body bg-primary-subtle">
                <div className="d-flex">
                  <div className="bg-primary col-3 col-md-3  col-sm-2 rounded-3">
                    <img
                      src="img/smallcard3.svg"
                      className="img-fluid align-self-center ms-auto me-auto mt-3 d-block"
                      alt="img"
                    />
                  </div>
                  <h5 className="card-title fw-bold  row-col-8  container-fluid  float-end mt-4">
                    Everything Together
                  </h5>
                  <button
                    className=" border-0 bg-primary-subtle text-primary   bi bi-arrow-down-circle-fill d-block d-md-none mt-3"
                    onClick={() => handleButtonClick(3)}
                  >
                    {expandedCard === 3 ? " " : " "}
                  </button>
                </div>
                <p className="card-text d-none d-md-block">
                  Stop wasting time! Our structured roadmaps help you go from
                  basics to advanced no time!
                </p>
                {expandedCard === 3 && (
                  <p className="card-text-small d-md-none">
                    Stop wasting time! Our structured roadmaps help you go from
                    basics to advanced no time!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* -----------small cards end---------- */}
        </div>
      </div>

      {/* ----------------big img--------------------- */}
      <div className="BigImg container-fluid text-center">
        <img
          src="img/bigimg.jpeg"
          className="img-fluid   rounded-4"
          alt="img"
        
        />
      </div>
    </>
  );
}

export default Smallcard;
