import React from "react";
import NavBar from "./Components/layout/NavBar";
import CourseOverview from "./Components/course/CourseOverview";
import CourseAdd from "./Components/course/CourseAdd";
import CourseList from "./Components/course/CourseList";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <>
            <NavBar />
            <div
                style={{ maxWidth: "960px", margin: "5em auto" }}
                className="container"
            >
                {
                    fromBackend == 10 ? <CourseList /> :
                    fromBackend == 20 ? <CourseAdd /> :
                    fromBackend == 30 ? <CourseOverview /> : {}
                }
            </div>
        </>
    );
}
console.log(fromBackend);
export default App;
