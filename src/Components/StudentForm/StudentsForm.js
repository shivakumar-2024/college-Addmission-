import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  addStudentApplicationDetails,
  fetchAllCountry,
  fetchAllCourses,
} from "../../Services/StudentsApplication/StudentsApplicationService";

const StudentsForm = () => {
  const navigate = useNavigate(); // Move useNavigate outside of handleSubmit

  const [country, setCountry] = useState([]);
  const [course, setCourse] = useState([]);
  const [selectedFile, setSelectedFile] = useState({
    photo: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fatherName: "",
    motherName: "",
    pinCode: "",
    dob: "",
    city: "",
    country: "",
    courseMaster: "",
    gender: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fatherName: "",
    motherName: "",
    pinCode: "",
    dob: "",
    city: "",
    country: "",
    courseMaster: "",
    gender: "",
  });

  const ValidateForm = () => {
    let errors = {};
    let isValid = true;
    if (!formData.firstName) {
      errors.firstName = "Please enter your first name.";
      isValid = false;
    }
    // Add validations for other fields
    // ...
    setValidationErrors(errors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    const isValid = ValidateForm();

    if (isValid) {
      const formValues = new FormData();
      formValues.append("StudentApplication", JSON.stringify(formData));
      formValues.append("studentPhoto", selectedFile);

      const response = await addStudentApplicationDetails(formValues);
      // setFormData(response);
      console.log("Submitted id : ", response.body);
      navigate("/studentQualification", { state: { id: response.body } });
    }
  };

  useEffect(() => {
    fetchCoursesApiCall();
    fetchCountryDetailsApicall();
  }, []);

  const fetchCountryDetailsApicall = async () => {
    try {
      const response = await fetchAllCountry();
      setCountry(response.body);
    } catch (error) {
      alert("Failed to fetch college details: " + error.message);
    }
  };
  const fetchCoursesApiCall = async () => {
    try {
      const response = await fetchAllCourses();
      setCourse(response.body);
    } catch (error) {
      alert("Failed to fetch courses details: " + error.message);
    }
  };

  return (
    <div className="card">
      <div className="card-header" style={{color:"white",backgroundColor:"blue",textAlign:"center"}}><h4>Student Application form</h4></div>
      {/* {JSON.stringify(formData)} */}
      <div className="card-body">
        <form>
          <div className="row">
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.firstName ? "is-invalid" : ""
                  }`}
                  id="firstName"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {validationErrors.firstName && (
                  <div className="invalid-feedback">
                    {validationErrors.firstName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="lastName">last Name</label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.lastName ? "is-invalid" : ""
                  }`}
                  id="lastName"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formData?.lastName}
                  onChange={handleChange}
                />
                {validationErrors.lastName && (
                  <div className="invalid-feedback">
                    {validationErrors.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  name="email"
                  value={formData?.email}
                />
                {validationErrors.email && (
                  <div className="invalid-feedback">
                    {validationErrors.email}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  className={`form-control ${
                    validationErrors.phoneNumber ? "is-invalid" : ""
                  }`}
                  id="phoneNumber"
                  onChange={handleChange}
                  placeholder="Enter your phone Number"
                  name="phoneNumber"
                  value={formData?.phoneNumber}
                />
                {validationErrors.phoneNumber && (
                  <div className="invalid-feedback">
                    {validationErrors.phoneNumber}
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="fatherName">Father Name</label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.fatherName ? "is-invalid" : ""
                  }`}
                  id="fatherName"
                  placeholder="Enter your father name"
                  name="fatherName"
                  onChange={handleChange}
                  value={formData?.fatherName}
                />
                {validationErrors.fatherName && (
                  <div className="invalid-feedback">
                    {validationErrors.fatherName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="motherName">Mother Name</label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.motherName ? "is-invalid" : ""
                  }`}
                  id="motherName"
                  placeholder="Enter your mother name"
                  name="motherName"
                  onChange={handleChange}
                  value={formData?.motherName}
                />
                {validationErrors.motherName && (
                  <div className="invalid-feedback">
                    {validationErrors.motherName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="dob">DOB</label>
                <input
                  type="date"
                  className={`form-control ${
                    validationErrors.dob ? "is-invalid" : ""
                  }`}
                  id="dob"
                  onChange={handleChange}
                  placeholder="Enter your dob"
                  name="dob"
                  value={formData?.dob}
                />
                {validationErrors.dob && (
                  <div className="invalid-feedback">{validationErrors.dob}</div>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className={`form-control ${
                    validationErrors.city ? "is-invalid" : ""
                  }`}
                  id="city"
                  onChange={handleChange}
                  placeholder="Enter your city"
                  name="city"
                  value={formData?.city}
                  // onChange={handleInputChange}
                />
                {validationErrors.city && (
                  <div className="invalid-feedback">
                    {validationErrors.city}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="pinCode">Pincode</label>
                <input
                  type="number"
                  className={`form-control ${
                    validationErrors.pinCode ? "is-invalid" : ""
                  }`}
                  id="pinCode"
                  onChange={handleChange}
                  placeholder="Enter your pincode"
                  name="pinCode"
                  value={formData?.pinCode}
                  // onChange={handleInputChange}
                />
                {validationErrors.pinCode && (
                  <div className="invalid-feedback">
                    {validationErrors.pinCode}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="countryName">Country name</label>
                <select
                  name="country"
                  value={formData?.country ? formData.country : ""}
                  onChange={handleChange}
                  className={`form-control ${
                    validationErrors.country ? "is-invalid" : ""
                  }`}
                  id="countryName"
                >
                  <option value="">Select Country...</option>
                  {country.map((countries) => (
                    <option key={countries.id} value={countries.id}>
                      {countries.countryName}
                    </option>
                  ))}
                </select>
                {validationErrors.countryName && (
                  <div className="invalid-feedback">
                    {validationErrors.countryName}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="courseMaster">Course Master</label>
                <select
                  name="courseMaster"
                  value={formData?.courseMaster ? formData.courseMaster : ""}
                  onChange={handleChange}
                  className={`form-control ${
                    validationErrors.courseMaster ? "is-invalid" : ""
                  }`}
                  id="courseMaster"
                >
                  <option value="">Select Course...</option>
                  {course.map((courses) => (
                    <option key={courses.id} value={courses.id}>
                      {courses.courses}
                    </option>
                  ))}
                </select>
                {validationErrors.courseMaster && (
                  <div className="invalid-feedback">
                    {validationErrors.courseMaster}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="photo">Photo</label>
                <input
                  type="file"
                  className={`form-control ${
                    validationErrors.photo ? "is-invalid" : ""
                  }`}
                  id="photo"
                  onChange={handleFileChange}
                  name="photo"
                />
                {validationErrors.photo && (
                  <div className="invalid-feedback">
                    {validationErrors.photo}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-3">
            <button
              type="button"
              className="btn btn-sm btn-success text-white me-2"
              onClick={() => handleSubmit()}
              style={{color:"white",backgroundColor:"blue"}}
            >
              Submit
            </button>
            <button type="reset" className="btn btn-sm btn-warning text-white">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentsForm;
