import React from 'react'

function Whatsets() {
  return (
    <>
      <div className="WhatSetSection m-md-5 p-md-3  m-2 m-lg-5 p-2  p-lg-5  bgprimay   rounded-2">
        <h1 className="text-center fw-bold text-primary  mt-4 ">
          What sets us apart?
        </h1>
        <p className="text-center text-secondary ">Here’s a comparison</p>

        <div className="WhatSetCard rounded-3  bg-light-subtle mx-lg-5 mt-5 mb-3 overflow-hidden overflow-x-scroll">
          <table className=" list-group-item ms-3 mx-lg-5 mb-3     list-group-flush  text-center ">
            <thead>
              <tr>
                <th className="col-md-3 ps-lg-5 " scope="col"></th>
                <th
                  className="col-md-3 p-3 px-lg-5 px-md-4 fs-4 text-light-emphasis"
                  scope="col"
                >
                  AlgoExpert
                </th>
                <th
                  className="col-md-3 p-3 px-lg-5 px-md-4  fs-4  text-light-emphasis"
                  scope="col"
                >
                  Educative
                </th>
                <th
                  className="col-md-3 px-lg-5 fs-3 px-md-4 py-3 fs-4  text-light-emphasis fs fw-bold bg-primary-subtle  "
                  scope="col"
                >
                  <i className="bi bi-mortarboard-fill fs-3 text-primary   m-1 "></i>
                  INTERVIEW READY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  className=" text-start pt-4 fs-5 text-light-emphasis"
                  scope="row"
                >
                  Video Lessons
                </th>
                <td className="pt-4">
                  <i className="bi bi-check-circle-fill fs-3  text-primary"></i>
                </td>
                <td className="pt-4">
                  <i className="bi bi-x-circle-fill fs-3  text-danger "></i>
                </td>
                <td className="pt-4">
                  <i className="bi bi-check-circle-fill fs-3  text-primary"></i>
                </td>
              </tr>
              <tr>
                <th
                  className=" text-start pt-4 fs-5  text-light-emphasis"
                  scope="row"
                >
                  PDF Resources
                </th>
                <td className="pt-4">
                  <i className="bi bi-check-circle-fill fs-3  text-primary"></i>
                </td>
                <td className="pt-4">
                  <i className="bi bi-check-circle-fill fs-3  text-primary"></i>
                </td>
                <td className="pt-4">
                  <i className="bi bi-check-circle-fill fs-3  text-primary"></i>
                </td>
              </tr>
              <tr>
                <th
                  className=" text-start pt-4 fs-5 text-light-emphasis"
                  scope="row"
                >
                  Lifetime Validity
                </th>
                <td className="pt-4">
                  <i className="bi bi-x-circle-fill  fs-3  text-danger "></i>
                </td>
                <td className="pt-4">
                  <i className="bi bi-x-circle-fill fs-3  text-danger "></i>
                </td>
                <td className="pt-4">
                  <i className="bi bi-check-circle-fill fs-3  text-primary"></i>
                </td>
              </tr>
              <tr>
                <th
                  className=" text-start pt-4 fs-5 text-light-emphasis"
                  scope="row"
                >
                  Live Zoom <br /> Classes
                </th>
                <td className="pt-4">
                  <i className="bi bi-x-circle-fill fs-3  text-danger "></i>
                </td>
                <td className="pt-4">
                  <i className="bi bi-x-circle-fill fs-3  text-danger "></i>
                </td>
                <td className="pt-4">
                  <i className="bi bi-check-circle-fill fs-3  text-primary"></i>
                </td>
              </tr>
              <tr>
                <th
                  className=" text-start pt-4 fs-5 text-light-emphasis"
                  scope="row"
                >
                  System Design <br /> Judge
                </th>
                <td className="pt-4">
                  <i className="bi bi-x-circle-fill fs-3  text-danger "></i>
                </td>
                <td className="pt-4">
                  <i className="bi bi-x-circle-fill fs-3 text-danger "></i>
                </td>
                <td className="pt-4">
                  <i className="bi bi-check-circle-fill fs-3  text-primary"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <style jsx>{`
          td,
          th {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}</style> */}
      </div>
    </>
  );
}

export default Whatsets;
