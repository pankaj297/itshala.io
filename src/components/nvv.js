<div className="header bg-body-tertiary fixed-top">
  <nav className="navbar p-2 navbar-expand-md">
    <div className="container-fluid togglebt">
      <button
        className="ms-3 bg-light fs-2 border-0 d-block d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="icontog">
          <i class="bi bi-grid"></i>
        </span>
      </button>

      <a className="m-3 d-none d-md-block" href="/">
        <i class="bi bi-mortarboard-fill fs-2 text-success"></i>
      </a>

      <a className="navbar-brand d-none d-md-block d-lg-block" href="_blank">
        <b>INTERVIEW</b> <b className="m-2 text-success">READY</b>
      </a>

      <div
        className="offcanvas offcanvas-start float-start content"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title fw-bold fs-2"
            id="offcanvasNavbarLabel"
          >
            Close
          </h5>
          <button
            type="button"
            className="border-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="bi bi-x-diamond-fill text-danger fs-1"></i>
          </button>
        </div>

        <div className="offcanvas-body ">
          <ul className=" pe-3 fs-3 fw-bold">
            <li className="nav-item dropdown d-block  d-md-none">
              <a
                href="/"
                className="nav-link text-dark  dropdown-toggle"
                // href="_blank"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu fs-4">
                <li>
                  <Link to="blog" className="dropdown-item">
                    System Design Simplified
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="_blank">
                    Data Structures & Algorithms
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="_blank">
                    Behavioural Interviews
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item d-block d-md-none ">
              <Link to="/blog" className="nav-link mt-3 ">
                Blog
              </Link>
            </li>
            <li className="nav-item d-block d-md-none fs-3 fw-bold">
              <Link
                to="/faqs"
                className="nav-link pointer-event mt-3"
                aria-current="page"
              >
                FAQs
              </Link>
            </li>
            <li className="nav-item  d-block d-md-none">
              <Link
                to="/comments"
                className="nav-link  fs-3 fw-bold mt-3"
                aria-current="page"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <a className="m-3 me-auto d-block d-md-none" href="/">
        <i class="bi bi-mortarboard-fill fs-2 text-success "></i>
      </a>
      <ul className="d-flex">
        <li className="Courseslg nav-item dropdown fw-bolder d-none d-md-block list-unstyled pt-2  m-2">
          <a
            className="nav-link dropdown-toggle"
            href="_blank"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Courses
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/blog" className="dropdown-item">
                System Design Simplified
              </Link>
            </li>
            <li>
              <a className="dropdown-item" href="_blank">
                Data Structures & Algorithms
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="_blank">
                Behavioural Interviews
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item  fw-bolder  list-unstyled pt-2  m-2 me-0">
          <Link to="/blog" className="nav-link  pointer-event">
            Blog
          </Link>
        </li>

        <li className="nav-item list-unstyled m-2 pt-2 ">
          <Link to="/signin" className="nav-link fw-bolder pointer-event ">
            Sign in
          </Link>
        </li>

        <li className="nav-item list-unstyled pt-2 pe-3">
          <a href="https://interviewready.io/learn/system-design-course/how-do-i-use-this-course/what-do-we-offer">
            <button
              type="button"
              class="btn border-2 fw-bold btn-outline-success"
            >
              Try for Free
            </button>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</div>;




// -----------------------
//  <div className="header bg-body-tertiary fixed-top">
//         <nav className="navbar p-2 navbar-expand-md">
//           <div className="container-fluid togglebt">
//             <button
//               className="ms-3 bg-light fs-2 border-0 d-block d-md-none"
//               type="button"
//               data-bs-toggle="offcanvas"
//               data-bs-target="#offcanvasNavbar"
//               aria-controls="offcanvasNavbar"
//               aria-label="Toggle navigation"
//             >
//               <span className="icontog">
//                 <i class="bi bi-grid"></i>
//               </span>
//             </button>

//             <a className="m-3 d-none d-md-block" href="/">
//               <i class="bi bi-mortarboard-fill fs-2 text-success"></i>
//             </a>

//             <a
//               className="navbar-brand d-none d-md-block d-lg-block"
//               href="_blank"
//             >
//               <b>INTERVIEW</b> <b className="m-2 text-success">READY</b>
//             </a>

//             <div
//               className="offcanvas offcanvas-start float-start content"
//               tabindex="-1"
//               id="offcanvasNavbar"
//               aria-labelledby="offcanvasNavbarLabel"
//             >
//               <div className="offcanvas-header">
//                 <h5
//                   className="offcanvas-title fw-bold fs-2"
//                   id="offcanvasNavbarLabel"
//                 >
//                   Close
//                 </h5>
//                 <button
//                   type="button"
//                   className="border-0"
//                   data-bs-dismiss="offcanvas"
//                   aria-label="Close"
//                 >
//                   <i class="bi bi-x-diamond-fill text-danger fs-1"></i>
//                 </button>
//               </div>

//               <div className="offcanvas-body ">
//                 <ul className=" pe-3 fs-3 fw-bold">
//                   <li className="nav-item dropdown d-block  d-md-none">
//                     <a
//                       href="/"
//                       className="nav-link text-dark  dropdown-toggle"
//                       // href="_blank"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       Courses
//                     </a>
//                     <ul className="dropdown-menu fs-4">
//                       <li>
//                         <Link to="blog" className="dropdown-item">
//                           System Design Simplified
//                         </Link>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="_blank">
//                           Data Structures & Algorithms
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="_blank">
//                           Behavioural Interviews
//                         </a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="nav-item d-block d-md-none ">
//                     <a href="/blog" className="nav-link mt-3 ">
//                       Blog
//                     </a>
//                   </li>
//                   <li className="nav-item d-block d-md-none fs-3 fw-bold">
//                     <a
//                       href="/faqs"
//                       className="nav-link pointer-event mt-3"
//                       aria-current="page"
//                     >
//                       FAQs
//                     </a>
//                   </li>
//                   <li className="nav-item  d-block d-md-none">
//                     <a
//                       href="/comments"
//                       className="nav-link  fs-3 fw-bold mt-3"
//                       aria-current="page"
//                     >
//                       Testimonials
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <a className="m-3 me-auto d-block d-md-none" href="/">
//               <i class="bi bi-mortarboard-fill fs-2 text-success "></i>
//             </a>
//             <ul className="d-flex">
//               <li className="Courseslg nav-item dropdown fw-bolder d-none d-md-block list-unstyled pt-2  m-2">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="_blank"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Courses
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a href="/blog" className="dropdown-item">
//                       System Design Simplified
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="_blank">
//                       Data Structures & Algorithms
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="_blank">
//                       Behavioural Interviews
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item  fw-bolder  list-unstyled pt-2  m-2 me-0">
//                 <Link to="/blog" className="nav-link  pointer-event">
//                   Blog
//                 </Link>
//               </li>

//               <li className="nav-item list-unstyled m-2 pt-2 ">
//                 <Link
//                   to="/signin"
//                   className="nav-link fw-bolder pointer-event "
//                 >
//                   Sign in
//                 </Link>
//               </li>

//               <li className="nav-item list-unstyled pt-2 pe-3">
//                 <a href="https://interviewready.io/learn/system-design-course/how-do-i-use-this-course/what-do-we-offer">
//                   <button
//                     type="button"
//                     class="btn border-2 fw-bold btn-outline-success"
//                   >
//                     Try for Free
//                   </button>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>



// =======================
{/* <div className="offcanvas-body">
                <ul className="navbar-nav  pe-3 fs-3 fw-bold">
                  <li className="Courseslg nav-item dropdown d-block d-sm-block d-md-none">
                    <a
                      className="nav-link text-dark  dropdown-toggle"
                      href="_blank"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Courses
                    </a>
                    <ul className="dropdown-menu fs-4">
                      <li>
                        <a className="dropdown-item" href="_blank">
                          System Design Simplified
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="_blank">
                          Data Structures & Algorithms
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="_blank">
                          Behavioural Interviews
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item d-block d-md-none ">
                    <a
                       href="/blog"
                      className="nav-link pointer-event  active fs-3 fw-bold"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item d-block d-md-none fs-3 fw-bold">
                    <a className="nav-link active" aria-current="page" href="/">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item  d-block d-md-none">
                    <a
                      className="nav-link active fs-3 fw-bold"
                      aria-current="page"
                      href="/"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div> */}




// ------------------------------
  <nav className="navbar bg-body-tertiary  fixed-top">
    <div className="container-fluid ">
      {/* <a className="navbar-brand d-none d-md-block" href="#">
            Offcanvas dark navbar
          </a> */}
      <div className="d-flex">
        <button
          className="navbar-toggler mx-3 bg-light fs-2   d-block d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="icontog">
            <i className="bi bi-grid"></i>
          </span>
        </button>

        <a
          className="ms-3  navbar-brand d-none d-md-block d-lg-block"
          href="_blank"
        >
          <b>INTERVIEW</b> <b className="m-2 text-success">READY</b>
        </a>

        <a className="" href="/">
          <i className="bi bi-mortarboard-fill fs-3 text-success"></i>
        </a>
      </div>
      {/* -------------------big screen---------------------- */}
      <div className="newNav">
        <ul className="d-flex . mt-2 ">
          <li className="nav-item d-none d-md-block pt-2  dropdown">
            <a
              className="nav-link text-dark  dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item list-unstyled d-none d-md-block  pt-2">
            <a
              className="nav-link active text-dark"
              aria-current="page"
              href="#"
            >
              Testimonial
            </a>
          </li>
          <li className="nav-item  list-unstyled ">
            <a
              className="nav-link active text-dark pt-2"
              aria-current="page"
              href="#"
            >
              Sign in
            </a>
          </li>
          <li className="nav-item list-unstyled">
            <a className="btn active text-dark" aria-current="page" href="#">
              Try For free
            </a>
          </li>
        </ul>
      </div>

      {/* --------------------mobile view--------------- */}
      <div
        className="offcanvas offcanvas-start text-bg-light"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Dark offcanvas
          </h5>
          <button
            type="button"
            className="btn-close btn-close-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                href="/blog.js"
                className="nav-link active"
                aria-current="page"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Testimonial
              </a>
            </li>
          </ul>
        </div>
      </div>


      
    </div>
  </nav>;













// ===================----------------
  <div
    className="offcanvas   offcanvas-start float-start "
    tabindex="-1"
    id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title fw-bold fs-2" id="offcanvasNavbarLabel">
        Close
      </h5>
      <button
        type="button"
        className=" border-0  bg-transparent "
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i className="bi bi-x-diamond-fill text-danger fs-1"></i>
      </button>
    </div>

    <div className="">
      <ul>
        <li className="  list-unstyled ">
          <Link to="/blog" className=" text-decoration-none ">
            {" "}
            Blog
          </Link>
        </li>
      </ul>
    </div>
  </div>;













// ---------------------------------------------------------card--
   <div className=" mt-5 ">
     <div class="card cardswidthSDY  border-1 border-primary   col-lg-5 mt-lg-5   CourseCard ">
       {/* <img
                src="img/thumbnailFvideo.png"
                class="img-fluid rounded-2  card-img-top my-1"
                alt="img"
              /> */}
       <video
         className="img-fluid  rounded-3"
         poster="img/thumbnailFvideo.png"
         controls
         src="img/Intro.mp4"
       ></video>

       <div class="card-body">
         <h5 class="card-title fw-bold">System Design Simplified</h5>
         <div className="mt-1 d-flex  justify-content-between w-25 w-xs-25">
           <p className=" bg-primary-subtle   p-1 rounded">SDE1</p>
           <p className="bg-primary-subtle mx-2 p-1 rounded">SDE2</p>
           <p className="bg-primary-subtle   p-1 rounded">SDE3</p>
         </div>
         <div className="roundPhoto1">
           <img
             src="img/roundcardphoto1.jpeg"
             className="roundimg1  rounded-5"
             alt="img"
           />{" "}
           Gaurav Sen
         </div>
         <p class="card-text  d-block d-lg-none">
           An A-Z video course on system design patterns and best practices.
           This course ranges from basic concepts like routing, load balancing
           and caching to advanced concepts like concurrency, separation of
           concerns, and design tradeoffs.
         </p>
       </div>
       <ul class="list-group-item ms-3  list-group-flush">
         <li class="list-group-item">
           <i class="bi bi-camera-video text-primary pe-2"></i>
           285+ Video Lessons
         </li>

         <li class="list-group-item mt-2">
           <i class="bi bi-file-text text-primary pe-2"></i>44+ Quizzes
         </li>

         <li class="list-group-item pt-2">
           <i class="bi bi-file-earmark-arrow-down text-primary pe-2"></i>
           64+ Downloadable Resources
         </li>

         <li class="list-group-item pt-2">
           <i class="bi bi-person-video text-primary pe-2"></i>Live Classes
         </li>

         <li class="list-group-item pt-2">
           <i class="bi bi-file-medical text-primary pe-2"></i>Interview
           Questions
         </li>

         <li class="list-group-item pt-2">
           <i class="bi bi-clock text-primary pe-2"></i>Continuous Updates
         </li>

         <li class="list-group-item pt-2">
           <i class="bi bi-meta text-primary pe-2"></i>Lifetime Access
         </li>
       </ul>
       <div class="card-body pt-0">
         <a href="_blank" class="text-primary text-decoration-none">
           <b>
             <y className="text-dark">Buy for</y> 50% OFF
           </b>
         </a>
         <p className="text-dark fw-bold">
           ₹7,995.00{" "}
           <y className="fw-lighter text-secondary text-decoration-line-through">
             ₹15,990.00
           </y>
         </p>
         <a
           href="_blank"
           class="btn w-100  border-primary  border-2 fw-bold   text-primary  card-link"
         >
           Learn More <i class="bi bi-arrow-up-right"></i>
         </a>
       </div>
     </div>
   </div>