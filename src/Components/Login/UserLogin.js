import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  checkRegistrationForCollege,
  checkUserInformation,
} from "../../Services/LoginUserService/LoginUserService";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const response = await checkUserInformation(formData);
    if (response.success) {
     
      if (response.body.userRole === "Admin") {
        const internalResponse = await checkRegistrationForCollege(
          response.body.userId
        );
        if (internalResponse.body.registered) navigate("/adminShowUsers");
        else navigate("/collegeRegister");
      } else if (response.body.userRole === "Student") {
        navigate("/studentApplicationForm");
      }
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="card mx-auto mt-3" style={{ height: "20%", width: "30%" }}>
      <div
        className="card-header"
        style={{ paddingLeft: "40%", backgroundColor: "blue", color: "white" }}
      >
        <h4>User Login</h4>
      </div>

      <div className="form-group mt-3">
        <label htmlFor="userName" className="form-label ms-3">
          User Name
        </label>
        <input
          type="text"
          className="form-control w-75 ms-3"
          id="userName"
          placeholder="Enter your username"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="InputPassword" className="form-label ms-3">
          Password
          <br />
          <span style={{ fontSize: "70%", color: "red" }}>
            Must be 8-20 characters long.
          </span>
        </label>
        <input
          type="password"
          className="form-control w-75 ms-3"
          id="InputPassword"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3" style={{ textAlign: "center" }}>
        <input
          className="btn btn-primary mt-4"
          type="submit"
          value="Login"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default UserLogin;
