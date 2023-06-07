import React from "react";
import { NavLink } from "react-router-dom";
import "./about.css";
import Features from "../../Components/Features/Features";
import { successData } from "../../Hooks/Data";
import Instructor4 from "../../Components/InstructorCard/Instructor4";
import { useGloblaHook } from "../../Hooks/Context";
const About = () => {
  const {titleChange} = useGloblaHook();
  titleChange("About")
  return (
    <>
      <div className="about-hero bg-light p-global">
        <p className="text-center fs-2 fw-6 text-dark ">About Us</p>
        <h1 className="text-center fs-4-5 plr-6 mt-2">
          Defining your future Starts With growing your skills
        </h1>
        <p className="mt-2 text-center fs-2 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
        <NavLink to={"/courses"}>
          <button className="btn-success">Find Courses</button>
        </NavLink>
        <img
          src="./assets/7849viwa.webp"
          alt="student success"
          className="success-img"
        />
        <img
          src="./assets/8z0y7c2r.webp"
          alt="video courses"
          className="video-img"
        />
        <img src="./assets/star.webp" alt="star" className="star-left" />
        <img src="./assets/star.webp" alt="star" className="star-right" />
      </div>
      <div className="p-global">
        <h1 className="text-center fs-4 text-dark mb-2">
          Here are a few numbers <br /> that we are proud of
        </h1>
        <div className="d-grid-3">
          {successData.map((ele) => {
            return (
              <div className="mt-2">
                <h1 className="fs-2-5 text-center">{ele.num}</h1>
                <p className="fs-2 fw-6 text-center mt-1">{ele.title}</p>
                <p className="fs-1-5 text-center mt-1 text-dark">{ele.des}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Features />
      <div className="about-instructor">
        <Instructor4 />
      </div>
    </>
  );
};

export default About;
