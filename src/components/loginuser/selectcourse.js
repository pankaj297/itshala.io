import React, { useState } from "react";
import Loginusernav from "./loginusernav";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Selectcourse() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleCourseSelection = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const calculateTotalPrice = () => {
    const prices = {
      "System Design Simplified": 15990,
      "Data Structures & Algorithms": 12980,
      "Behavioural Interviews": 3990,
    };

    let totalPrice = selectedCourses.reduce((acc, course) => {
      return acc + prices[course];
    }, 0);

    let discountPrice = totalPrice;
    if (discountApplied) {
      discountPrice *= 0.5; // Apply 50% discount
    }

    let finalPrice = totalPrice - discountPrice;

    return {
      totalPrice: totalPrice.toFixed(2),
      discountPrice: discountPrice.toFixed(2),
      finalPrice: finalPrice.toFixed(2),
    };
  };


   const handleBuyNow = () => {
     const finalPrice = calculateTotalPrice().finalPrice;
     alert(`You will pay ₹${finalPrice}`);
   };

  return (
    <>
      <Loginusernav />
      <div className="Selectcourse   container-fluid">
        <Link
          to="/Yourcourse"
          className="border-0   text-decoration-none text-dark  bg-white fs-5"
        >
          <i className="bi bi-arrow-left-circle me-2 text-primary fs-4"></i>
          Back to Account
        </Link>
        <div className="mt-5  d-flex justify-content-between row row-cols-1 row-cols-md-2">
          <div className="col-12 ps-4   col-md-6 justify-content-center p-2 p-lg-5">
            {/* Cards */}
            <div
              className={`carddd mt-3  rounded-1 container-fluid d-flex row row-cols-3 ${
                selectedCourses.includes("System Design Simplified")
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleCourseSelection("System Design Simplified")}
            >
              <div className="col-5 ps-lg-3 ps-0  d-flex justify-content-center align-items-center">
                <img
                  src="img/thumbnailFvideo.png"
                  className="img-fluid rounded-2 h-75 card-img-top"
                  alt="System Design Simplified"
                />
              </div>
              <div className="col-6 mt-2 mt-sm-4">
                <h6>System Design Simplified</h6>
                <div>
                  <b>₹7,995.00</b>{" "}
                  <p className="text-decoration-line-through text-body-secondary">
                    ₹15,990.00
                  </p>
                </div>
              </div>
              <div className="col-1 d-grid justify-content-center align-items-center">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input border-1 fs-2 p-2"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                </div>
              </div>
            </div>

            {/* Data Structures & Algorithms Card */}
            <div
              className={`carddd ps-0 ps-lg-3 mt-3 rounded-1 container-fluid d-flex row row-cols-3 
              ${
                selectedCourses.includes("Data Structures & Algorithms")
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                handleCourseSelection("Data Structures & Algorithms")
              }
            >
              <div className="col-5 d-flex justify-content-center align-items-center">
                <img
                  src="img/cardphoto2.jpeg"
                  className="img-fluid rounded-2 h-75 card-img-top"
                  alt="Data Structures & Algorithms"
                />
              </div>
              <div className="col-6 mt-2 mt-sm-4">
                <h6>Data Structures & Algorithms</h6>
                <div>
                  <b>₹6,490.00</b>{" "}
                  <p className="text-decoration-line-through text-body-secondary">
                    ₹12,980.00
                  </p>
                </div>
              </div>
              <div className="col-1 d-grid justify-content-center align-items-center">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input border-1 fs-2 p-2"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                </div>
              </div>
            </div>

            {/* Behavioural Interviews Card */}
            <div
              className={`carddd ps-0 ps-lg-3 mt-3  rounded-1 container-fluid d-flex row row-cols-3 ${
                selectedCourses.includes("Behavioural Interviews")
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleCourseSelection("Behavioural Interviews")}
            >
              <div className="col-5 d-flex justify-content-center align-items-center">
                <img
                  src="img/cardphoto3.jpeg"
                  className="img-fluid rounded-2 h-75 card-img-top"
                  alt="Behavioural Interviews"
                />
              </div>
              <div className="col-6 mt-2 mt-sm-4">
                <h6>Behavioural Interviews</h6>
                <div>
                  <b>₹1,995.00</b>{" "}
                  <p className="text-decoration-line-through text-body-secondary">
                    ₹3,990.00
                  </p>
                </div>
              </div>
              <div className="col-1 d-grid justify-content-center align-items-center">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input border-1 fs-2 p-2"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6  mt-lg-3">
            {/* Total Price Section */}
            <div className="totalcard  mt-5 rounded-top-2 border-0 ">
              <h4 className="ms-md-3 pt-2 ms-2 fs-3">Payment</h4>
              <p className=" text-center fs-5 text-body-secondary fw-bold ">
                {selectedCourses.length > 0
                  ? "Selected Courses:"
                  : "No Course Selected"}
              </p>
              {selectedCourses.length > 0 && (
                <ul className=" ms-2 list-unstyled fs-5  ms-md-4">
                  {selectedCourses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              )}
              <div className=" ms-2 ms-md-4 fs-5  fw-bold  d-flex justify-content-between me-md-5">
                {" "}
                Course Price :{" "}
                <p className=""> ₹{calculateTotalPrice().totalPrice}</p>
              </div>
              {discountApplied && (
                <>
                  <div className="ms-md-4 ms-2 fs-5 fw-bold  text-success d-flex justify-content-between me-md-5 ">
                    Coupon Discount (50%):{" "}
                    <p className="">
                      -₹
                      {calculateTotalPrice().discountPrice}
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="ps-5 fs-5 rounded-bottom-2  pe-4 mt-0 pt-2 totalpricesec  fw-bold    d-flex justify-content-between me-md-5 ">
              Total: <p className="">₹{calculateTotalPrice().finalPrice}</p>
            </div>
            <div className="d-grid">
              <button
                className="btn btn-primary p-2 mt-4"
                onClick={() => setDiscountApplied(!discountApplied)}
              >
                {discountApplied ? "Remove Coupon" : "Apply Coupon (50% off)"}
              </button>
            </div>
            <button
              className="btn w-100 p-2 btn-primary mt-3"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <p className=" fs-5 fw-bold ">SD50 Applied!</p>
          </div>
        </div>
      </div>
      <hr className="pricefooter" />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Selectcourse;
