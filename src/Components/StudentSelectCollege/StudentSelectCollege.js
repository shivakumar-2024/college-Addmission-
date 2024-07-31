import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/NavbarStudent";
import { useNavigate, useLocation } from "react-router-dom";

import {
  fetchAllColleges,
  addstudentCollege,
} from "../../Services/StudentSelectCollege/StudentSelectCollegeService";

const StudentSelectCollege = () => {
  const [allCollegeShow, setAllCollegeShow] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState();
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [IdCollege, setIdCollege] = useState([]);
  const [formData, setFormData] = useState({});

  const [studentSelectCollege, setStudentSelectCollege] = useState("");
  useEffect(() => {
    setAllCollegeShowApiCall();
  }, []);

  const setAllCollegeShowApiCall = async () => {
    try {
      const response = await fetchAllColleges();
      setAllCollegeShow(response.body);
    } catch (error) {
      console.error("Failed to fetch colleges:", error);
    }
  };
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
   
    if (id) {
      setFormData({
        ...formData,
        userId: id,
      });
    }
  }, [id]);
  const navigate=useNavigate();
  const handleClick = () => {
    if (selectedCollege) {
      if (
        !selectedColleges.some((college) => college.id === selectedCollege.id)
      )
        setSelectedColleges((prevSelectedColleges) => [
          ...prevSelectedColleges,
          selectedCollege,
        ]);
    }
    setSelectedCollege();
  };

  const handleSelect = (event) => {
    if (event.target.value != "")
      setSelectedCollege(allCollegeShow[event.target.selectedIndex - 1]);
  };

  const handleSubmit = async () => {
    const selectedCollegeIds = selectedColleges.map((college) => college.id);
    setIdCollege(selectedCollegeIds);
    // const id = setFormData({ ...formData, id });
    console.log(selectedCollegeIds);
    const response = await addstudentCollege({
      userId: id,
      collegeIds: IdCollege,
    });
    
    if(response.success){
      alert("Successfully");
      navigate("/homePage");
    }
    else{
      
  }
  };

  return (
    <>
      <div  style={{ textAlign: "center",color:"white",background:"blue" }}><h4>Student Select College</h4></div>
      <div className="card">
        <div className="card-body w-75 mx-auto border mt-5 mb-5">
          <div className="mb-4" style={{ textAlign: "center" }}>
            <h3>Apply College</h3>
          </div>
          <div>
            <div className="row">
              <div className="col-md-4">
                <h5 className="form-label mt-3 ms-5">College :</h5>
              </div>
              <div className="col-md-8">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ marginTop: "1%" }}
                  onChange={handleSelect}
                >
                  <option key="none" value="" selected>
                    Select your college
                  </option>
                  {allCollegeShow?.map((college) => (
                    <option key={college.id} value={college.id}>
                      {college.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="button mt-5 text-center">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleClick}
              >
                Add College
              </button>
            </div>
            <hr
              style={{
                backgroundColor: "black",
                height: "1px",
              }}
            />

            <div className="text-center ">
              <h3>Selected College</h3>
            </div>
            <div>
              <table className="table-bordered table-hover table-striped mt-4">
                <thead>
                  <tr>
                    <th
                      scope="row"
                      style={{ textAlign: "center", width: "13%" }}
                    >
                      College Name
                    </th>
                    <th
                      scope="row"
                      style={{ textAlign: "center", width: "13%" }}
                    >
                      Email Id
                    </th>
                    <th
                      scope="row"
                      style={{ textAlign: "center", width: "13%" }}
                    >
                      Address
                    </th>
                    {/* <th
                      scope="row"
                      style={{ textAlign: "center", width: "13%" }}
                    >
                      Location
                    </th> */}
                    <th
                      scope="row"
                      style={{ textAlign: "center", width: "13%" }}
                    >
                      Phone Number
                    </th>
                    <th
                      scope="row"
                      style={{ textAlign: "center", width: "13%" }}
                    >
                      College Code
                    </th>
                    <th
                      scope="row"
                      style={{ textAlign: "center", width: "12%" }}
                    >
                      Total Seat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedColleges?.map((college) => (
                    <tr key={college.id}>
                      <td>{college.name}</td>
                      <td>{college.emailId}</td>
                      <td>{college.address}</td>
                      <td>{college.phoneNo}</td>
                      <td>{college.collegeCode}</td>
                      <td>{college.totalSeat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-5 text-center" onClick={handleSubmit}>
                <button type="button" className="btn btn-primary btn-sm">
                  Apply College
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSelectCollege;
