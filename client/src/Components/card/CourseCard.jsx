import React from "react";
import "./coursecard.css";
import { MdOutlinePersonOutline, MdOutlineVideocam } from "react-icons/md";
const CourseCard = () => {
  return (
    <>
      <div className="course-card">
        <div className="course-card-img">
          <img
            src="https://d3mxt5v3yxgcsr.cloudfront.net/courses/6584/course_6584_image.jpg"
            alt=""
          />
        </div>
        <div className="course-card-content">
          <div className="price">Free</div>
          <h1>Html for beginner</h1>
          <div className="d-flex space-between mt-1">
            <p className="fs-1-5 fw-6 text-dark">Frontend</p>
            <p className="d-flex fs-1-5  d-flex g-0-5">
              <span className="fs-2 text-green">
                <MdOutlineVideocam />
              </span>
              9 video
            </p>
          </div>
          <button>konw more</button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
