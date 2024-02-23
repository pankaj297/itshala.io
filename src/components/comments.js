import React, { useState }  from 'react'
import Data from './Api';
import Faqs from './faqs';


function Comments() {
 const [apiData, ] = useState(Data);

  return (
    <>
      <div className="CommentsCards m-2 m-md-5  bgprimay  bg-opacity-10  rounded-3 p-3 ">
        <h2 className=" fw-bold  text-center text-success">
          A Software Engineer’s <br /> Best kept Secret
        </h2>
        <p className="text-center fs-6 text-secondary-emphasis">
          Our courses have helped thousands of <br /> engineers, get their dream
          job at their dream companies.
        </p>
        <div
          className="row row-cols-md-2 row-cols-xl-3 d-md-flex m-1 justify-content-center m-md-3 overflow-y-scroll overflow-hidden "
          style={{ height: "600px" }}
        >
          {/* -------------------card 1----------------- */}

          {apiData.map((curElem) => {
            const { name, bio, image, description } = curElem;

            return (
              <>
                <div className="card mt-3 p-0 col-md-5 mx-4" key={curElem}>
                  <div className="card-body">
                    <div className="d-flex row row-cols-2">
                      <img
                        src={image}
                        className="img-fluid rounded-start-circle rounded-end-circle  col-3"
                        alt="img"
                      />
                      <p className="card-title fs-4 fw-bold  col-9">
                        {name}
                        <p className="card-subtitle cmtcardbio mb-2 text-body-secondary">
                          {bio}
                        </p>
                      </p>
                    </div>

                    <p className="card-text mt-2">
                      <p>
                        <i class="bi bi-star-fill text-warning me-1"></i>
                        <i class="bi bi-star-fill text-warning me-1"></i>
                        <i class="bi bi-star-fill text-warning me-1"></i>
                        <i class="bi bi-star-fill text-warning me-1 "></i>
                        <i class="bi bi-star-fill text-warning"></i>
                      </p>
                      {description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Faqs />
    </>
  );
}

export default Comments;
