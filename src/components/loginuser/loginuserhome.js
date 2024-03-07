import React from 'react'
import Loginusernav from './loginusernav';
import Home from "../home";
import Course from "../Course";
import Smallcard from "../Smallcard";
import Whatsets from "../Whatsets";
import Comments from "../comments";
import Footer from "../Footer";
import Faqs from "../faqs";
import Getinterviewcard from "../getinterviewcard";

function Loginuserhome() {
  return (
    <>
      <div className="">
       <Loginusernav />
      </div>
      <div className="content border-0 ">
        <Home />
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
      <div>
        <Faqs />
      </div>
      <div>
        <Getinterviewcard />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Loginuserhome;
