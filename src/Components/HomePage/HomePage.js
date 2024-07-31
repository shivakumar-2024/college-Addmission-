import React, { useState, useEffect} from 'react';
import { fetchAllCourses } from "../../Services/AdminSelectCourses/AdminSelectCoursesService";


import Carousel from "../Carousel/carousel";

const HomePage = () => {
  const [formData, setFormData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(5);
  const [startIndex, setStartIndex] = useState(0); // Track the starting index for the visible items

  useEffect(() => {
    const fetchAllCoursesDetailsApiCall = async () => {
      try {
        const response = await fetchAllCourses();
        setFormData(response.body);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchAllCoursesDetailsApiCall();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 1 && startIndex + visibleItems < formData.length) {
        // User scrolled to the bottom, load more items
        setStartIndex((prev) => Math.min(prev + 5, formData.length - 5));
      } else if (scrollTop === 0 && startIndex > 0) {
        // User scrolled to the top, load previous items
        setStartIndex((prev) => Math.max(prev - 5, 0));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [formData.length, startIndex, visibleItems]);

  const [userType, setUserType] = useState('');

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (userType === 'admin') {
      // Redirect to admin signup page
      window.location.href = '/registerAdmin';
    } else if (userType === 'student') {
      // Redirect to student signup page
      window.location.href = '/userRegisteration';
    } else {
      // Show an alert if no option is selected
      alert('Please select a user type.');
    }
  };

  return (
    <>
      
      <div className="card" style={{ width: "100%", display: "flex" }}>
        <Carousel />
      </div>
      <div className="card" style={{ height: "50%", overflowY: "auto", display: "flex" }}>
        <div className="row">
          <div className="col-md-3">
            <div className="table-container" style={{ height: "400px", overflowY: "auto" }}>
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>All Courses</th>
                  </tr>
                </thead>
                <tbody style={{ overflowY: "auto" }}>
                  {formData?.slice(startIndex, startIndex + visibleItems).map((course, index) => (
                    <tr key={index}>
                      <td>{course.courses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6 text-center mt-3">
            <div className="me-5" style={{ textAlign: "left" }}>
             <div style={{textAlign:"center"}}><h4>Application Form</h4></div> 
              <p>1) An admission management system is a digital solution to manage student enrollments in colleges, universities, and training institutions.</p>
              <p>2) Educational institutions use Education CRM to distribute inquiries to counselors/admission teams, follow-up with leads, and complete the enrollment process digitally.</p>
              <p>3) An admission management system is a digital solution to manage student enrollments in colleges, universities, and training institutions.</p>
              <p>4) Educational institutions use Education CRM to distribute inquiries to counselors, admission teams, follow-up with leads, and complete the enrollment process digitally.</p>
            </div>
          </div>
          <div className="col-md-3" >
            <div className="card me-5 rounded-4 mt-3">
              <h6 className="mt-3 ps-2"> Application Form Open to Fill Now</h6>
              <ol style={{ listStyleType: "unset" }}>
                <li>Take Admission in Top College</li>
                <li>Study in Top College</li>
                <li>Study with Excellent Tutors</li>
                <li>100% Job Placement</li>
                <li> with Good Campus</li>
                <li>Study with excellent Environment</li>
                <li>with all facilities Hostal</li>
                <li>with Ac Bus for pickup</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="" style={{ marginLeft: "27%" }}>
         <div style={{marginLeft:"20%"}}><h5>About the sample university</h5></div> 
          <p>we are a unique university, the best in the world in the arena of art and design. We are also top the arena of food processing technologies and rocket science. Enroll now in your favorite course and join in the millions of successful experts.</p>
        </div>
        <div className="row text-center" style={{ marginLeft: "17%", marginTop: "10%" }}>
          <div className="col-md-2 ms-3" style={{ textAlign: "left" }}>
           <div style={{ textAlign:"center" }}> <h6>E-ADMISSION SYSTEM</h6></div> 
            <p>An admission management system is a digital solution to manage student enrollment in colleges, universities, and training Institution</p>
          </div>
          <div className="col-md-2 ms-3" style={{ marginLeft: "17%" }}>
            <h6>ABOUT US</h6>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link1</a>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link2</a>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link3</a>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link4</a>
            </div>
          </div>
          <div className="col-md-2 ms-3" style={{ marginLeft: "17%" }}>
            <h6>CONTACT US</h6>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link1</a>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link2</a>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link3</a>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link4</a>
            </div>
          </div>
          <div className="col-md-2 ms-3">
            <h6>CAREERS</h6>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link1</a>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link2</a>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link3</a>
              <a href="/about" style={{ textDecoration: 'none', borderBottom: 'none' }}>Link4</a>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "3%" }}>
          <div style={{ borderTop: "1px solid wheat", paddingTop: "1em", marginLeft: "10px", marginRight: "10px" }}>
            <h5>Register for free</h5>
            <p>
              <input
                type="radio"
                id="adminRadio"
                name="userType"
                value="admin"
                checked={userType === 'admin'}
                onChange={() => setUserType('admin')}
              />
              <label htmlFor="adminRadio">Admin</label>
              
              <input
                type="radio"
                id="studentRadio"
                name="userType"
                value="student"
                checked={userType === 'student'}
                onChange={() => setUserType('student')}
                style={{marginLeft:"3%"}}
              />
             
             
              <label htmlFor="studentRadio">Student</label>
              <button onClick={handleSignup}  style={{backgroundColor:"blueviolet",color:"white",marginLeft:"5%"}}>Sign Up</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
