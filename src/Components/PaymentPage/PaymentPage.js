import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { addstudentPayment } from "../../Services/StudentPaymentService/StudentPaymentService";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    amountFees: "",
    studentId: "",
  });
  const location = useLocation();
  const { id } = location.state || {};

  // handleSubmit=async()=>{
  //   const response=await
  // }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //  localStorage.setItem(userId);
  // }, [id]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    if (id) {
      setFormData({
        ...formData,
        studentId: id,
      });
    }
  }, [id]);

  const handleSubmit = async () => {
    console.log(JSON.stringify(formData))
    const response = await addstudentPayment(formData);
    // debugger
    if (response.success) {
      // debugger;
      navigate("/studentAddCollege", { state: { id: id } });
    }
  };

  return (
    <div className="row">
      <div className="col-12 text-center d-flex justify-content-center">
        <div
          className="card w-50 m-5"
          style={{ height: "20rem", textAlign: "center" }}
        >
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong></strong> Document Upload, Pay
            the Registration Fees and submit the form.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

          <div className="card-body ">
            <div className="text-center mb-4">
              <h3>Payment User</h3>
            </div>
            <div className="row">
              <div className="col me-5">
                <label>Amount</label>
              </div>
              <div className="col me-5">
                <input
                  type="number"
                  className="form-control"
                  name="amountFees"
                  value={formData.amountFees}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleSubmit}
              >
                Pay And Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
