import React, { useEffect, useState } from "react";
import { fetchCollegeDetails } from "../../Services/RegisterCollege/RegisterCollegeService";
import NavbarStudent from "../Navbar/NavbarStudent";
import { useNavigate } from "react-router-dom";

const CollegeListing = () => {
  const [formData, setFormData] = useState({});

  const fetchCollegeDetailsApicall = async () => {
    try {
      const response = await fetchCollegeDetails();
      setFormData(response.body); // Assuming response is directly the formData you want to set
    } catch (error) {
      alert("Failed to fetch college details: " + error.message);
    }
  };

  useEffect(() => {
    fetchCollegeDetailsApicall();
  }, []);
const navigate=useNavigate();
  const handleSubmit=()=>{
    navigate("/adminShowUsers");
  }

  return (
    <div className="card">
      <div
        className="card-header mb-3 "
        style={{ background: "blue", color: "white" }}
      >
        Registerd College
      </div>
      <div className="card-body">
        <table class="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th scope="row" style={{ textAlign: "center" }}>
                S.No
              </th>
              <th scope="row" style={{ textAlign: "center" }}>
                College Name
              </th>
              <th scope="row" style={{ textAlign: "center" }}>
                Email Id
              </th>
              <th scope="row" style={{ textAlign: "center" }}>
                Address
              </th>
              <th scope="row" style={{ textAlign: "center" }}>
                Phone No
              </th>
              <th scope="row" style={{ textAlign: "center" }}>
                College Code
              </th>
              <th scope="row" style={{ textAlign: "center" }}>
                Total Seat
              </th>
             
            </tr>
          </thead>
          <tbody>
            {formData &&
              Array.isArray(formData) &&
              formData.map((data, index) => (
                <>
                  <tr>
                    <td scope="row" style={{ textAlign: "left" }}>
                      {index + 1}
                    </td>
                    <td scope="row" style={{ textAlign: "left" }}>
                      {data.name}
                    </td>
                    <td scope="row" style={{ textAlign: "left" }}>
                      {data.emailId}
                    </td>
                    <td scope="row" style={{ textAlign: "left" }}>
                      {data.address}
                    </td>
                    <td scope="row" style={{ textAlign: "left" }}>
                      {data.phoneNo}
                    </td>
                    <td scope="row" style={{ textAlign: "left" }}>
                      {data.collegeCode}
                    </td>
                    <td scope="row" style={{ textAlign: "left" }}>
                      {data.totalSeat}
                    </td>
                    
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
      <div style={{textAlign:"center" ,padding:"3%"}}>
      <button type="button" class="btn btn-primary"
      onClick={handleSubmit}>Click</button>
      </div>
    </div>
  );
};

export default CollegeListing;
