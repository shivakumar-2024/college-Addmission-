import React, { useEffect, useState } from "react";
import {
  addCollegeDetails,
  fetchCollegeDetails,
} from "../../Services/RegisterCollege/RegisterCollegeService";
import { useNavigate } from "react-router-dom";
const RegisterCollege = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    password: "",
    address: "",
    phoneNo: "",
    collegeCode: "",
    totalSeat: "",
    userId: parseInt(localStorage.getItem("userId"))
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    emailId: "",
    password: "",
    address: "",
    phoneNo: "",
    collegeCode: "",
    totalSeat: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const ValidateForm = () => {
    let errors = {};
    let isValid = true;
    if (!formData.name) {
      errors.name = "Please enter your college name.";
      isValid = false;
    }
    if (!formData.emailId) {
      errors.emailId = "Please enter your college email.";
      isValid = false;
    }
    if (!formData.password) {
      errors.password = "Please enter your college password.";
      isValid = false;
    }
    if (!formData.address) {
      errors.address = "Please enter your college address.";
      isValid = false;
    }
    if (!formData.phoneNo) {
      errors.phoneNo = "Please enter your college phone number.";
      isValid = false;
    }
    if (!formData.collegeCode) {
      errors.collegeCode = "Please enter your college code.";
      isValid = false;
    }
    if (!formData.totalSeat) {
      errors.totalSeat = "Please enter your college  total seat.";
      isValid = false;
    }
    setValidationErrors(errors);
    return isValid;
  };
  const navigate =useNavigate();
console.log(localStorage.getItem("userId"))
  const handleSubmit = async () => {
    const isValid = ValidateForm();
    if (isValid) {
      const response = await addCollegeDetails(formData);
      if (response.success) {
        navigate("/adminAddCourses");
      } else {
        alert(response.message);
      }
    }
  };

  return (
    <div className="card m-3">
      <div
        className="card-header "
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Register College
      </div>
      <div className="card-body">
        <table class="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th scope="row" colSpan="2" style={{ textAlign: "center" }}>
                Register College
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ width: "50%", paddingLeft: "37%" }}>College Name</td>
              <td>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.name && "is-invalid"
                  }`}
                  name="name"
                  id="name"
                  placeholder="Enter college name"
                  value={formData?.name}
                  onChange={handleChange}
                  style={{ width: "80%" }}
                />
                {validationErrors.name && (
                  <div className="invalid-feedback">
                    {validationErrors.name}
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td style={{ width: "50%", paddingLeft: "37%" }}>
                College Email
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter college email"
                  className={`form-control ${
                    validationErrors.emailId && "is-invalid"
                  }`}
                  name="emailId"
                  id="emailId"
                  value={formData?.emailId}
                  onChange={handleChange}
                  style={{ width: "80%" }}
                />
                {validationErrors.emailId && (
                  <div className="invalid-feedback">
                    {validationErrors.emailId}
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td style={{ width: "50%", paddingLeft: "37%" }}>Password</td>
              <td>
                <input
                  type="password"
                  placeholder="Enter password"
                  className={`form-control ${
                    validationErrors.password && "is-invalid"
                  }`}
                  name="password"
                  id="password"
                  value={formData?.password}
                  style={{ width: "80%" }}
                  onChange={handleChange}
                />
                {validationErrors.password && (
                  <div className="invalid-feedback">
                    {validationErrors.password}
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "37%" }}> College Address</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter college address"
                  className={`form-control ${
                    validationErrors.address && "is-invalid"
                  }`}
                  name="address"
                  id="address"
                  value={formData?.address}
                  style={{ width: "80%" }}
                  onChange={handleChange}
                />
                {validationErrors.address && (
                  <div className="invalid-feedback">
                    {validationErrors.address}
                  </div>
                )}
              </td>
            </tr>

            <tr>
              <td style={{ paddingLeft: "37%" }}>College Phone no</td>
              <td>
                <input
                  type="number"
                  placeholder="Enter college phone no"
                  className={`form-control ${
                    validationErrors.phoneNo && "is-invalid"
                  }`}
                  name="phoneNo"
                  id="phoneNo"
                  value={formData?.phoneNo}
                  style={{ width: "80%" }}
                  onChange={handleChange}
                />
                {validationErrors.phoneNo && (
                  <div className="invalid-feedback">
                    {validationErrors.phoneNo}
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "37%" }}>College Code</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter college code"
                  className={`form-control ${
                    validationErrors.collegeCode && "is-invalid"
                  }`}
                  name="collegeCode"
                  id="collegeCode"
                  value={formData?.collegeCode}
                  style={{ width: "80%" }}
                  onChange={handleChange}
                />
                {validationErrors.collegeCode && (
                  <div className="invalid-feedback">
                    {validationErrors.collegeCode}
                  </div>
                )}
              </td>
            </tr>
            <tr>
              {" "}
              <td style={{ paddingLeft: "37%" }}>Total Seat</td>
              <td>
                <input
                  type="number"
                  placeholder="Enter college total seat"
                  className={`form-control ${
                    validationErrors.totalSeat && "is-invalid"
                  }`}
                  name="totalSeat"
                  id="totalSeat"
                  value={formData?.totalSeat}
                  style={{ width: "80%" }}
                  onChange={handleChange}
                />
                {validationErrors.totalSeat && (
                  <div className="invalid-feedback">
                    {validationErrors.totalSeat}
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-sm btn-success"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCollege;
