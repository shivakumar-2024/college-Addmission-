import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/NavbarStudent";
import { fetchAllCourses } from "../../Services/AdminSelectCourses/AdminSelectCoursesService";
import { SelectedCoursesCollege } from "../../Services/SelectedCoursesCollege/SelectedCoursesCollegeService";
import { useNavigate } from "react-router-dom";
// import {SelectedCoursesCollege} from "../../Services/SelectedCoursesCollege";

const AdminSelectCourses = () => {
  const [formData, setFormData] = useState({ collegeCode: "", coursesId: [] });
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
 

  const fetchAllCoursesDetailsApiCall = async () => {
    try {
      const response = await fetchAllCourses();
      setCourses(response.body);
    } catch (error) {
      alert("Failed to fetch courses details: " + error.message);
    }
  };

  useEffect(() => {
    fetchAllCoursesDetailsApiCall();
  }, []);

  const handleSelectCoursesChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => ({
        id: option.value,
        name: option.text,
      })
    );

    const newSelectedCourses = selectedOptions.filter(
      (newCourse) => !selectedCourses.some((course) => course.id === newCourse.id)
    );

    setSelectedCourses([...selectedCourses, ...newSelectedCourses]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = (courseId) => {
    const updatedCourses = selectedCourses.filter(
      (course) => course.id !== courseId
    );
    // setFormData({
    //   ...formData, 
    //   coursesId: updatedCourses
    // })
    setSelectedCourses(updatedCourses);
  };

  // useEffect(() => {
  //   console.log(JSON.stringify(formData))
  // }, [formData])

  const navigate =useNavigate();
  const handleSubmit = async () => {
   
    // // formData[]
    const selectedCourseIds = selectedCourses.map((item) => parseInt(item.id));
    // console.log(selectedCourseIds)
    // debugger;
   formData.coursesId = selectedCourseIds
   

    
    const response = await SelectedCoursesCollege(formData);
    if(response.success){
      console.log("body : ", response.body)
      setFormData(response.body);
      
      navigate("/collegeListing");
      
    }
    
    else{
      alert(response.message)
    }
    // setFormData({
    //   ...formData, 
    //   courses: [...selectedCourses]
    // })
    // setTimeout(() => {
    //   submitDataApiCall();
    // }, 2000)
    
  };

  return (
    <>
      <div
        className="card-header"
        style={{ color: "white", backgroundColor: "blue",textAlign:"center" }}
      >
      <h5>Admin Add Courses</h5>
      </div>
      <div className="card w-50 border mt-5 mx-auto">
        <div className="text-center mb-4 mt-2">
          <h3>Add College Course</h3>
        </div>
        <div className="ps-3">
          <label>College Code</label>
        </div>
        <div className="ps-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your College code"
            style={{ width: "80%" }}
            name="collegeCode"
            id="collegeCode"
            value={formData.collegeCode}
            onChange={handleChange}
          />
        </div>
        <div className="ps-3 mt-2">Course</div>
        <div className="ps-2">
          <select
            multiple
            className="form-control"
            style={{ width: "80%" }}
            onChange={handleSelectCoursesChange}
          >
            <option hidden value="">Select Courses</option>
            {courses.map((item) => (
              <option key={item.id} value={item.id}>
                {item.courses}
              </option>
            ))}
          </select>
        </div>
        <div className="m-4">
          <table className="table table-hover table-striped table-bordered table-responsive">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Selected Courses</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedCourses.map((course, index) => (
                <tr key={course.id}>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(course.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 mb-2">
          <button
            type="button"
            className="btn btn-primary btn-sm d-block mx-auto"
            onClick={handleSubmit}
          >
            Add Course
          </button>
        </div>
      </div>
      
    </>
  );
};

export default AdminSelectCourses;
