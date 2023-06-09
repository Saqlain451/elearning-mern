import React, { useEffect } from "react";
import "./instructor.css";
import Title from "../../Components/Title/Title";
import InstructorCard from "../../Components/InstructorCard/InstructorCard";
import { NavLink } from "react-router-dom";
import Faq from "../Faq/Faq";
import { useGloblaHook } from "../../Hooks/Context";
const Instructor = () => {
  const { instructor,titleChange} = useGloblaHook();
  titleChange("Instructors")
  const instructData = {
    subHeading: "Team Members",
    heading: "Our Expert",
    heading2: "Instructors",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  };
  return (
    <>
      <div className="instructor-hero bg-light p-relative">
        <h1 className="text-center fs-5">Our Instructors</h1>
        <div className="shape-left"></div>
        <div className="shap-right"></div>
      </div>

      <div className="ptb-10">
        <Title {...instructData} />
        <div className="grid-4 p-6 grid-sm-1 grid-lg-2">
          {instructor.map((ele, id) => {
            return (
              <NavLink to={`/instructor/${ele._id}`} key={id}>
                <InstructorCard
                  fname={ele.fname}
                  role={ele.role}
                  img={ele.img}
                  lname={ele.lname}
                />
              </NavLink>
            );
          })}
        </div>
       
          <Faq />
        
      </div>
    </>
  );
};

export default Instructor;
