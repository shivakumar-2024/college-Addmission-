import React, { useState } from "react";
import { addStudentRegisterationDetails } from "../../Services/RegisterationService/RegisterationService";
import { useNavigate } from "react-router-dom";
const Registeration = () => {
  const [formData, setFormData] = useState({
    studentRole: "Student",
    name: "",
    fatherName: "",
    motherName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    state: "",
    city: "",
    addressLin1: "",
    pinCode: "",
    dob: "",
    password: "",
    lastLoginAt: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name) {
      errors.name = "Please provide your user name.";
      isValid = false;
    }
    if (!formData.fatherName) {
      errors.fatherName = "Please provide your father name";
      isValid = false;
    }
    // Add validation for other fields

    setValidationErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const isValid = validateForm();
    if (isValid) {
      const response = await addStudentRegisterationDetails(formData);
     
      if (response.success) {
        setFormData({
          ...formData,
          name: "",
          fatherName: "",
          motherName: "",
          phoneNumber: "",
          email: "",
          gender: "",
          state: "",
          city: "",
          addressLin1: "",
          pinCode: "",
          dob: "",
          password: "",
          lastLoginAt: "",
        });

        navigate("/userLogin");
      } else {
        alert(response.message);
      }
    }
  };

  return (
    <>
      <div className="card" style={{ width: "95%", marginLeft: "3%" }}>
        <div
          className="card-header"
          style={{ color: "white", backgroundColor: "blue" }}
        >
          Registration Details
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th scope="row" colSpan="2" style={{ textAlign: "center" }}>
                  Registration Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "50%", marginRight: "50%" }} scope="row">
                  User Name
                </td>
                <td>
                  <input
                    placeholder="Enter user name"
                    maxLength={40}
                    className="form-control"
                    style={{ width: "50%" }}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {validationErrors.name && (
                    <div className="invalid-feedback">
                      {validationErrors.name}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td scope="row">Father Name</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    style={{ width: "50%" }}
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    placeholder="Enter father name"
                    onChange={handleInputChange}
                  />
                  {validationErrors.fatherName && (
                    <div className="invalid-feedback">
                      {validationErrors.fatherName}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td scope="row">Phone Number</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    style={{ width: "50%" }}
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    placeholder="Enter your Phone number"
                    maxLength={10}
                    onChange={handleInputChange}
                  />
                  {validationErrors.phoneNumber && (
                    <div className="invalid-feedback">
                      {validationErrors.phoneNumber}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{ width: "50%" }}
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {validationErrors.email && (
                    <div className="invalid-feedback">
                      {validationErrors.email}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>
                  <select
                    className="form-control"
                    style={{ width: "50%" }}
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">choose option...</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                  {validationErrors.gender && (
                    <div className="invalid-feedback">
                      {validationErrors.gender}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>
                  <input
                    style={{ width: "50%" }}
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                  {validationErrors.dob && (
                    <div className="invalid-feedback">
                      {validationErrors.dob}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>State</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    style={{ width: "50%" }}
                    className="form-control"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                  {validationErrors.state && (
                    <div className="invalid-feedback">
                      {validationErrors.state}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    style={{ width: "50%" }}
                    className="form-control"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  {validationErrors.city && (
                    <div className="invalid-feedback">
                      {validationErrors.city}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    style={{ width: "50%" }}
                    className="form-control"
                    id="addressLin1"
                    name="addressLin1"
                    value={formData.addressLin1}
                    onChange={handleInputChange}
                  />
                  {validationErrors.addressLin1 && (
                    <div className="invalid-feedback">
                      {validationErrors.addressLin1}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td>
                  <input
                    type="number"
                    placeholder="Enter your number"
                    className="form-control"
                    style={{ width: "50%" }}
                    maxLength={6}
                    id="pinCode"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                  />
                  {validationErrors.pinCode && (
                    <div className="invalid-feedback">
                      {validationErrors.pinCode}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="form-control"
                    style={{ width: "50%" }}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {validationErrors.password && (
                    <div className="invalid-feedback">
                      {validationErrors.password}
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-sm btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registeration;
