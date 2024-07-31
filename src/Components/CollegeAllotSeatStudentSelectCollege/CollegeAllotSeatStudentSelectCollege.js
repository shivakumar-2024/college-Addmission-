import React from "react";
import NavbarStudent from "../Navbar/NavbarStudent";

const CollegeAllotSeatStudentSelectCollege = () => {
  return (
    <>
      {" "}
      <NavbarStudent />
      <div className="card m-5">
        <table className="table-hover table-bordered table-striped m-3">
          <thead>
            <tr>
              <th scope="row " style={{ width: "11%", textAlign: "center" }}>
                College Name
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Email Id
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Address
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Location
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Phone no
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                College Code
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Total Seat
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Available Seat
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Booked Seat
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div style={{ textAlign: "center", marginTop: "5%" }}>
          <h3>Alloted College</h3>
        </div>
        <table className="table-hover table-striped table-bordered m-3">
          <thead>
            <tr>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                College Name
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Email Id
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Address
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Location
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Phone no
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                College Code
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Total Seat
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Available Seat
              </th>
              <th scope="row" style={{ width: "11%", textAlign: "center" }}>
                Booked Seat
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="text-center m-4">
          <button type="button" class="btn btn-primary btn-sm">
            Download Application
          </button>
        </div>
      </div>
    </>
  );
};

export default CollegeAllotSeatStudentSelectCollege;
