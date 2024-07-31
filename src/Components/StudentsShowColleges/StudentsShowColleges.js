import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/NavbarStudent";
import NavbarCollege from "../Navbar/NavbarCollege";

import {
  fetchStudentsData,
  checkIdAllotedTrue,
  StudentAllotTrue,
  allotedStudentPdfId
} from "../../Services/StudentsShowCollegesService/StudentsShowCollegesService";
import { json } from "react-router-dom";

const StudentsShowColleges = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fatherName: "",
    motherName: "",
    course: "",
    city: "",
    pinCode: "",
    state: "",
    country: "",
    allotStatus: false,
    percentage: "",
    passingYear: "",
  });

  const [allotedStudent, setAllotedStudent] = useState({});
  const [trueStudentAllotedData, setTrueStudentAllotedData] = useState({});

  


  const fetchStudentsDataApiCall = async (bool) => {
    try {
      const response = await fetchStudentsData(bool); // false data student
      if(!bool)
        setFormData(response.body);
      else
        setTrueStudentAllotedData(response.body)
    } catch (error) {
      alert("Failed to fetch college details: " + error.message);
    }
  };

  useEffect(() => {
    fetchStudentsDataApiCall(true);
    fetchStudentsDataApiCall(false);
  }, []);

  const fetchStudentAllotTrueApiCall = async () => {
    try {
      const response = await StudentAllotTrue(); //true data student
      setTrueStudentAllotedData(response.body);
    } catch (error) {
      alert("Failed to fetch college details: " + error.message);
    }
  };
  let userId=null;
  const handleChange = async (key) => {
    try {
     const response = await checkIdAllotedTrue(key);
     userId=key;
     

      fetchStudentsDataApiCall();
      fetchStudentAllotTrueApiCall();
    } catch (error) {
    
      console.error("Error:", error);
    }
  };
  const handlePdt = async (id) => {
    

    
    const response = await allotedStudentPdfId(id);
    console.log(response);

    if (response.success) {
      convertToPdf(response.body)
    } else {
      alert("Not Student pdf");
    }
  }
  const convertToPdf =(base64String)=>{

   
    const binaryString = atob(base64String);
  
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }

        // Create a Blob object representing the PDF file
        const pdfBlob = new Blob([byteArray], { type: 'application/pdf' });

        // Create a temporary URL for the Blob
        const url = URL.createObjectURL(pdfBlob);

        // Create a link element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.pdf'; // Specify the filename
        a.click();

        // Revoke the temporary URL
        URL.revokeObjectURL(url);

     


  }
   const handleSubmit= async(id)=>{
    const response = await allotedStudentPdfId(id);
    
     if (response.success) {
      convertToPdfNotAllotStudent(response.body)
    } else {
      alert("Not Student pdf");
    }
  }
  const convertToPdfNotAllotStudent =(base64String)=>{

   
    const binaryString = atob(base64String);
  
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }

        // Create a Blob object representing the PDF file
        const pdfBlob = new Blob([byteArray], { type: 'application/pdf' });

        // Create a temporary URL for the Blob
        const url = URL.createObjectURL(pdfBlob);

        // Create a link element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.pdf'; // Specify the filename
        a.click();

        // Revoke the temporary URL
        URL.revokeObjectURL(url);


  }

  return (
    <>
      <div style={{color:"white",background:'blue',textAlign:"center"}}> <h4>College Status Seat</h4></div>
      <div className="card mt-4">
        <div className="mx-auto text-center">
          <h3>Total Applied Students</h3>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover table-striped table-responsive">
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>
                  S.No
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  First Name
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Last Name
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Mobile Number
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Email Id
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Father Name
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Mother Name
                </th>
               
                <th scope="col" style={{ textAlign: "center" }}>
                  Course
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  DownLoad Form
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Allotment Status
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Allot
                </th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(formData).map((key, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>{formData[key][0]?.firstName}</td>
                  <td>{formData[key][0]?.lastName}</td>
                  <td>{formData[key][0]?.phoneNumber}</td>
                  <td>{formData[key][0]?.email}</td>
                  <td>{formData[key][0]?.fatherName}</td>
                  <td>{formData[key][0]?.motherName}</td>
                
                  <td>{formData[key][0]?.course}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary m-2 "
                      onClick={()=>handleSubmit(formData[key][0].id)}
                    >
                      DownLoad
                    </button>
                  </td>
                  <td>
                    {formData[key]?.allotStatus ? "Alloted" : "Not Alloted"}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary m-3"
                      onClick={() => handleChange(formData[key][0].id)}
                    >
                      Allot
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mx-auto mt-2" style={{ marginTop: "3%" }}>
        <h4>Selected Students</h4>
      </div>
      <div className="card">
      <div className="mt-10 m-4">
        <table
          className=" table table-hover table-striped table-bordered table-responsive"
          style={{ marginTop: "7%" }}
        >
          <thead>
            <tr>
              <th scope="row" style={{ textAlign: "center", width: "7%" }}>
              S.No
              </th>
              <th scope="row" style={{ textAlign: "center", width: "10%" }}>
                First Name
              </th>
              <th scope="row" style={{ textAlign: "center", width: "10%" }}>
                last Name
              </th>
              <th scope="row" style={{ textAlign: "center", width: "10%" }}>
                Mobile
              </th>
              <th scope="row" style={{ textAlign: "center", width: "10%" }}>
                Email Id
              </th>
              <th scope="row" style={{ textAlign: "center", width: "10%" }}>
                Father Name
              </th>
              <th scope="row" style={{ textAlign: "center", width: "10%" }}>
                Mother Name
              </th>
             
              <th scope="row" style={{ textAlign: "center", width: "10%" }}>
                Course
              </th>
              <th style={{ textAlign: "center", width: "8%" }}>
                Download 
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(trueStudentAllotedData).map((id, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{trueStudentAllotedData[id][0]?.firstName}</td>
                <td>{trueStudentAllotedData[id][0]?.lastName}</td>
                <td>{trueStudentAllotedData[id][0]?.phoneNumber}</td>
                <td>{trueStudentAllotedData[id][0]?.email}</td>
                <td>{trueStudentAllotedData[id][0]?.fatherName}</td>
                <td>{trueStudentAllotedData[id][0]?.motherName}</td>
               
                {/* Assuming you want to access data from formData based on the same id */}
                <td>{trueStudentAllotedData[id][0]?.course}</td>
                <td>
                  <button type="button" className="btn btn-sm btn-primary m-2 
                  "
                  onClick={() => handlePdt(trueStudentAllotedData[id][0]?.id)}>
                    DownLoad 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default StudentsShowColleges;
