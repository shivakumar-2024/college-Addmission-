import React from "react";
import "./App.css";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Carousel from "./Components/Carousel/carousel";

const Registeration = React.lazy(() =>
  import("./Components/Registeration/Registeration")
);
const RegisterCollege = React.lazy(() =>
  import("./Components/RegisterCollege/RegisterCollege")
);
const CollegeListing = React.lazy(() =>
  import("./Components/RegisterCollege/CollegeListing")
);
const RegisterAdmin = React.lazy(() =>
  import("./Components/RegisterAdmin/RegisterAdmin")
);
const StudentsForm = React.lazy(() =>
  import("./Components/StudentForm/StudentsForm")
);
const StudentQualification = React.lazy(() =>
  import("./Components/StudentQualification/StudentQualification")
);
const UserLogin = React.lazy(() => import("./Components/Login/UserLogin"));
const AdminsShowUserDetails = React.lazy(() =>
  import("./Components/AdminShowUserDetails/AdminsShowUserDetails")
);

const AdminSelectCourses = React.lazy(() =>
  import("./Components/AdminSelectCourses/AdminSelectCourses")
);
const StudentSelectCollege = React.lazy(() =>
  import("./Components/StudentSelectCollege/StudentSelectCollege")
);
const StudentsShowColleges = React.lazy(() =>
  import("./Components/StudentsShowColleges/StudentsShowColleges")
);

const CollegeAllotSeatStudentSelectCollege = React.lazy(() =>
  import(
    "./Components/CollegeAllotSeatStudentSelectCollege/CollegeAllotSeatStudentSelectCollege"
  )
);

const PaymentPage = React.lazy(() =>
  import("./Components/PaymentPage/PaymentPage")
);

const HomePage = React.lazy(() => import("./Components/HomePage/HomePage"));
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route
          path="/userRegisteration"
          name="Registeration"
          element={<Registeration />}
        />
        <Route
          path="/collegeRegister"
          name="College Register"
          element={<RegisterCollege />}
        />
        <Route
          path="/collegeListing"
          name="Registered Colleges"
          element={<CollegeListing />}
        />
        <Route
          path="/registerAdmin"
          name="Register Admin"
          element={<RegisterAdmin />}
        />

       

        <Route
          path="/studentApplicationForm"
          name="student form"
          element={<StudentsForm />}
        />
        <Route
          path="/studentQualification"
          name="Student Qualification"
          element={<StudentQualification />}
        />
        <Route path="/userLogin" name="User Login" element={<UserLogin />} />
        <Route
          path="/adminShowUsers"
          name="Admin ShowUser Details"
          element={<AdminsShowUserDetails />}
        />

        <Route
          path="/studentAddCollege"
          name="Student Select College"
          element={<StudentSelectCollege />}
        />

        <Route
          path="/adminAddCourses"
          name="Admin Select Courses"
          element={<AdminSelectCourses />}
        />
        <Route path="/homePage" name="Home Page" element={<HomePage />} />
        <Route path="/carousel" name="Caurasel Page" element={<Carousel />} />

        <Route
          path="/showStudentsCollege"
          name="Students Show Colleges"
          element={<StudentsShowColleges />}
        />
        <Route
          path="/showCollegeSeatStudent"
          name="College Allot Seat Student Select College"
          element={<CollegeAllotSeatStudentSelectCollege />}
        />

        <Route/>
        <Route
          path="/paymentPage"
          name="Payment Page"
          element={<PaymentPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
