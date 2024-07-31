import React, { useState } from "react";
import { addRegisterAdmin } from "../../Services/RegisterAdmin/RegisterAdminService";
import { useHistory, useNavigate } from "react-router-dom";
const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    pinCode: "",
    password: "",
    adminRole: "Admin",
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    pinCode: "",
    password: "",
  });
  

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName) {
      errors.firstName = "Please enter your first name.";
      isValid = false;
    }
    if (!formData.lastName) {
      errors.lastName = "Please enter your last name.";
      isValid = false;
    }
    if (!formData.email) {
      errors.email = "Please enter your email.";
      isValid = false;
    }
    if (!formData.mobile) {
      errors.mobile = "Please enter your phone number.";
      isValid = false;
    }
    if (!formData.address) {
      errors.address = "Please enter your address.";
      isValid = false;
    }
    if (!formData.city) {
      errors.city = "Please enter your city.";
      isValid = false;
    }
    if (!formData.pinCode) {
      errors.pinCode = "Please enter your pin code.";
      isValid = false;
    }
    if (!formData.password) {
      errors.password = "Please enter a password.";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await addRegisterAdmin(formData);
        if (response.success) {
          // alert("Registration successful!");
          navigate("/userlogin");
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration. Please try again.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="card">
      <div
        className="card-header"
        style={{ color: "white", backgroundColor: "blue",textAlign:"center" }}
      >
      <h5> Register Admin</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <table className="table table-hover table-bordered table-striped">
            <thead>
              <tr>
                <th colSpan="2" style={{ textAlign: "center" }}>
                  Register Admin
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "50%", paddingLeft: "35%" }}>First Name</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className={`form-control ${
                      validationErrors.firstName && "is-invalid"
                    }`}
                    value={formData.firstName}
                    name="firstName"
                    style={{ width: "80%" }}
                    onChange={handleChange}
                  />
                  {validationErrors.firstName && (
                    <div className="invalid-feedback">
                      {validationErrors.firstName}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ width: "50%", paddingLeft: "35%" }}>Last Name</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    className={`form-control ${
                      validationErrors.lastName && "is-invalid"
                    }`}
                    value={formData.lastName}
                    style={{ width: "80%" }}
                    onChange={handleChange}
                  />
                  {validationErrors.lastName && (
                    <div className="invalid-feedback">
                      {validationErrors.lastName}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ width: "50%", paddingLeft: "35%" }}>Email</td>
                <td>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className={`form-control ${
                      validationErrors.email && "is-invalid"
                    }`}
                    value={formData.email}
                    style={{ width: "80%" }}
                    onChange={handleChange}
                  />
                  {validationErrors.email && (
                    <div className="invalid-feedback">
                      {validationErrors.email}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ width: "50%", paddingLeft: "35%" }}>Phone No</td>
                <td>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    name="mobile"
                    className={`form-control ${
                      validationErrors.mobile && "is-invalid"
                    }`}
                    value={formData.mobile}
                    style={{ width: "80%" }}
                    onChange={handleChange}
                  />
                  {validationErrors.mobile && (
                    <div className="invalid-feedback">
                      {validationErrors.mobile}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ width: "50%", paddingLeft: "35%" }}>Address</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    className={`form-control ${
                      validationErrors.address && "is-invalid"
                    }`}
                    value={formData.address}
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
                <td style={{ width: "50%", paddingLeft: "35%" }}>City</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    name="city"
                    className={`form-control ${
                      validationErrors.city && "is-invalid"
                    }`}
                    value={formData.city}
                    style={{ width: "80%" }}
                    onChange={handleChange}
                  />
                  {validationErrors.city && (
                    <div className="invalid-feedback">
                      {validationErrors.city}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ width: "50%", paddingLeft: "35%" }}>Pin Code</td>
                <td>
                  <input
                    type="number"
                    placeholder="Enter your pin code"
                    name="pinCode"
                    className={`form-control ${
                      validationErrors.pinCode && "is-invalid"
                    }`}
                    value={formData.pinCode}
                    style={{ width: "80%" }}
                    onChange={handleChange}
                  />
                  {validationErrors.pinCode && (
                    <div className="invalid-feedback">
                      {validationErrors.pinCode}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td style={{ width: "50%", paddingLeft: "35%" }}>Password</td>
                <td>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className={`form-control ${
                      validationErrors.password && "is-invalid"
                    }`}
                    value={formData.password}
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
            </tbody>
          </table>
          <div className="text-center">
            <button type="submit" className="btn btn-sm btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterAdmin;
