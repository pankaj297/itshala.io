import React from 'react';
import Course from './Course';
import Smallcard from './Smallcard';
import Whatsets from './Whatsets';
import Comments from './comments';
import Footer from './Footer';


function Home() {
   
  return (
    <>
      <div className="Home">
        <div className="card Homecard border-0  mx-lg-5 d-flex ">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title HomeCardTitle  fw-bold text-success ">
                  Nail SDE Interviews
                </h1>
                <h4 className="fw-bold">& Get your dream job</h4>
                <p className="card-text">
                  Learn how to design large-scale distributed systems, implement
                  coding design patterns <br /> and make tradeoffs on
                  consistency, availability and performance.
                </p>
                <p className="card-text mt-5 ">
                  <a href="https://interviewready.io/learn/system-design-course/how-do-i-use-this-course/what-do-we-offer">
                    <button type="button" class="btn p-2 Trybtn btn-success">
                      Try for Free
                    </button>
                  </a>
                  <p className="m-3">One time Purhase. Lifetime Access</p>
                </p>
              </div>
            </div>
            <div className="col-md-6  mb-4 mt-3 ">
              <video
                className="img-fluid video1 rounded-end rounded-start"
                poster="img/cardphoto1.jpeg"
                controls
                src="img/Intro.mp4"
              ></video>
            </div>
            <p className="imgblowtext text-center text-lg-start">
              <em className="fw-bold">
                Tursted byTursted by{" "}
                <em className="text-primary">16000 Engineers</em> who got their
                dream job at
              </em>
            </p>
            <div className="justify-content-md-center justify-content-lg-start  row mt-2 ">
              <div className="Logos d-flex justify-content-between">
                <img className="Logo" src="img/microsoft.png" alt="logo" />
                <img className="Logo" src="img/nike.png" alt="logo" />
                <img className="Logo" src="img/apple.png" alt="logo" />
                <img className="Logo" src="img/youtube.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Course">
        <Course />
      </div>
      <div className="Smallcard">
        <Smallcard />
      </div>
      <div className="Whatsets">
        <Whatsets />
      </div>
      <div className="CommentsCards">
        <Comments />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
