import React from 'react'

function Footer() {
  return (
    <>
      <div className="m-3 m-md-5 p-lg-5  d-flex row  row-cols-3  row-cols-md-5 ">
        <div className="col-md-5 mb-4  col-12  px-md-3 ">
          <a className="m-3 " href="_blank">
            <i class="bi bi-mortarboard-fill fs-2 text-primary"></i>
          </a>

          <a className="navbar-brand fs-4" href="_blank">
            <b>INTERVIEW</b> <b className="text-primary">READY</b>
          </a>
          <p>
            System Design explained with clear, concise videos. Saves time for
            your next big interview.
          </p>
          <div className="footicon fs-2">
            <i class="bi bi-youtube text-danger   me-4"></i>
            <i class="bi bi-linkedin text-primary  me-4 "></i>
            <i class="bi bi-twitter text-primary"></i>
          </div>
        </div>
        <div className="col-md-2 col-4">
          <p className="fw-bold ">SUPPORT</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>

        <div className="col-md-2 col-4">
          <p className="fw-bold">COMPANY</p>
          <p>Home</p>
          <p>Blog</p>
          <p>Abouts</p>
          <p>Testimonials</p>
        </div>

        <div className="col-md-3 col-4">
          <p className="fw-bold">LEGAL</p>
          <p>Disclaimer</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

      <hr className="mt-3  mx-md-5 fw-bold text-dark " />
      <p className="text-center ">© 2023 Interview Ready. All rights reserved.</p>
      <p className="text-center"> <b>Author : </b> Pankaj Naik</p>
      <p className="text-center fw-bold text-primary"> THANK YOU</p>
    </>
  );
}

export default Footer;
