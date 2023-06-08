import React from "react";
import "./coursecard.css";
import { MdOutlinePersonOutline} from "react-icons/md";
import { useNavigate } from "react-router-dom";
const CourseCard = ({ img, price, title, type, author,path }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="course-card">
        <div className="course-card-img">
          <img src={img} alt="" />
        </div>
        <div className="course-card-content">
          <div className="price fs-1-5 text-green">{price}</div>
          <h1>{title}</h1>
          <div className="d-flex space-between mt-1">
            <p className="d-flex fs-1-5  d-flex g-0-5">
              <span className="fs-2 text-green">
                <MdOutlinePersonOutline />
              </span>
              {author}
            </p>
            <p className="fs-1-5 fw-6 text-dark">{type}</p>
          </div>
          <button onClick={()=>{navigate(path)}}>konw more</button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
