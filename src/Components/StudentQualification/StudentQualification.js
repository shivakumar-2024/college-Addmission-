import React, { useEffect, useState } from "react";
import { studentDocument } from "../../Services/StudentQualification/StudentQualification";

import { useLocation, useNavigate } from "react-router-dom";

const StudentQualification = () => {
  const location = useLocation();
  const { id } = location.state || {};

  const [selectedFile, setSelectedFile] = useState({
    uploadDocument: "",
  });

  const [formData, setFormData] = useState({
    userId: "",
    standard: "",
    percentage: "",
    passingYear: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    standard: "",
    percentage: "",
    passingYear: "",
  });

  const ValidateForm = () => {
    let errors = {};
    let isValid = true;
    if (!formData.standard) {
      errors.standard = "Please enter standard";
      isValid = false;
    }
    if (!formData.percentage) {
      errors.percentage = "Please enter percentage";
      isValid = false;
    }
    if (!formData.passingYear) {
      errors.passingYear = "Please enter passingYear";
      isValid = false;
    }
    setValidationErrors(errors);
    return isValid;
  };

  
  useEffect(() => {
    if (id) {
      setFormData({
        ...formData,
        userId: id,
      });
    }
  }, [id]);

  const navigate = useNavigate();
  const [counterValue, setCounterValue] = useState(1);

  const handleSubmit = async () => {
    const isValid = ValidateForm();
    if (isValid) {
      const formValues = new FormData();
      formValues.append("document", JSON.stringify(formData));
      formValues.append("files", selectedFile);

      const response = await studentDocument(formValues);
      if (response.success) {
        setFormData({
          ...formData,
          standard: "",
          percentage: "",
          passingYear: "",
          userId: id,
        });
        setSelectedFile({ uploadDocument: " " });
        if (counterValue >= 2) {
          navigate("/paymentPage", { state: { id: id } });
        }
        var val = counterValue;
        val = val + 1;
        setCounterValue(val);
      } else {
        alert("File Already Exist ");
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="card w-50 mx-auto mt-3">
      <div
        className="card-header"
        style={{ backgroundColor: "blue ", color: "white" }}
      >
        <h5>Student Document</h5>
      </div>

      

      <div className="card-body">
        <form>
          <div className="form-group mt-2">
            <label htmlFor="standard">Standard</label>
            <select
              className="form-control mt-2"
              id="standard"
              name="standard"
              value={formData?.standard}
              style={{ width: "80%" }}
              onChange={handleChange}
            >
              <option>Select Qualification</option>
              <option value="1">10th</option>
              <option value="2">12th</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="percentage">Percentage</label>
            <input
              type="number"
              className={`form-control mt-2 ${
                validationErrors?.percentage && "is-invalid"
              }`}
              name="percentage"
              id="percentage"
              placeholder="Enter the percentage"
              style={{ width: "80%" }}
              value={formData?.percentage}
              onChange={handleChange}
            />
            {validationErrors.percentage && (
              <div className="invalid-feedback">
                {validationErrors.percentage}
              </div>
            )}
          </div>
          <div className="form-group mt-2">
            <label htmlFor="passingYear">Passing year</label>
            <input
              type="number"
              className={`form-control mt-2 ${
                validationErrors.passingYear && "is-invalid"
              }`}
              name="passingYear"
              id="passingYear"
              placeholder="Enter the passing year"
              style={{ width: "80%" }}
              value={formData?.passingYear}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="document">Upload Document</label>
            <div className="input-group">
              <input
                type="file"
                className={`form-control-file mt-3 ${
                  validationErrors.uploadDocument && "is-invalid"
                }`}
                onChange={handleFileChange}
                name="document"
                id="document"
              />
            </div>
          </div>
          <div className="text-center ">
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "blue ", color: "white" }}
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentQualification;
