import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Card.css";
const CardTest = ({ name, role, img }) => {
  return (
    <>
      <div className="card-test">
        <img src={img} alt="" />
        <p className="text-dark fs-2">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare."
        </p>
        <div className="d-flex space-between p-2 bg-light br-0-5 mt-2">
          <div>
            <p className="fs-1-5 fw-7">{name}</p>
            <p className="fs-1-5 font-dark">{role}</p>
          </div>
          <div className="fs-2 text-green ">
            <AiFillStar /> <AiFillStar /> <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTest;
