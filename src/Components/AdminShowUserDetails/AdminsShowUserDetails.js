import React, { useEffect,useState} from "react";
import NavbarStudent from "../Navbar/NavbarAdmin";
import {fetchAllotedseatAdmin,allotedStudentPdfId} from "../../Services/AdminShowUserDetailsService/AdminShowUserDetailsService";
import { fetchStudentsData } from "../../Services/StudentsShowCollegesService/StudentsShowCollegesService";

const AdminsShowUserDetails = () => {
  const [formData,setFormData]=useState({});
  useEffect(() => {
    fetchStudentsDataApiCall(true);
  }, []);

  const fetchStudentsDataApiCall = async (bool) => {
    try {
      const response = await fetchStudentsData(bool); // false data student
      
        setFormData(response.body);
     
    } catch (error) {
      alert("Failed to fetch college details: " + error.message);
    }
  };
  const handlePdt = async (id) => {
    

    
    const response = await allotedStudentPdfId(id);
   

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
  return (
    
   <>
    <div className="card-header" style={{color:"white",backgroundColor:"blue",textAlign:"center"}}><h4>Display student details to the admin</h4></div>
    
      <div className="card">
        <div className="card-body">
          <table class="table table-bordered table-hover table-striped mt-3">
            <thead  style={{color:"white",backgroundColor:"blue"}}>
              <tr>
                <th scope="row" style={{ textAlign: "center" }}>
                  Sr.No
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                  First Name
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                  Last Name
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                  Mobile
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                  Email Id
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                  Father Name
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                  Mother Name
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                  10th Document
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                  12th Document
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                  Course
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                 Form fees
                </th>
                
                <th scope="row" style={{ textAlign: "center" }}>
                  Approval Status
                </th>
                <th scope="row" style={{ textAlign: "center" }}>
                  Download Form
                </th>
               
                <th scope="row" style={{ textAlign: "center" }}>
                  Allotment 
                </th>
              </tr>
            </thead>
            <tbody>
            {Object.values(formData).map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item[0].firstName}</td>
              <td>{item[0].lastName}</td>
              <td>{item[0].phoneNumber}</td>
              <td>{item[0].email}</td>
              <td>{item[0].fatherName}</td>
              <td>{item[0].motherName}</td>
             
              <td>
                <button type="button" className="btn btn-primary" onClick={() => handlePdt(item[0].id)}>
                  Download
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-primary" onClick={() => handlePdt(item[1].id)}>
                  Download
                </button>
              </td>
              <td>{item[0].course}</td>
              <td>{item[0].allotStatus}</td>
            </tr>
            
          ))}
            </tbody>
           
          </table>
        </div>
      </div>
   </>
  );
};

export default AdminsShowUserDetails;
