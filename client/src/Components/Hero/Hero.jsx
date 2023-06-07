import React from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";
const Hero = ({ heading, subHeading, des, btnName,imgUrl,path }) => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-left">
      <img src="./assets/circle.webp" alt="circle" width={58} height={61} className="circle-img"/>
      <img src="./assets/star.webp" alt="start" width={21} height={27} className="star-img"/>
      <img src="./assets/circle.webp" alt="circle" width={58} height={61}/>
      <img src="./assets/star.webp" alt="start" width={21} height={27}/>
      <img src="./assets/circle.webp" alt="circle" width={58} height={61}/>
        <p className="sub-heading">{subHeading}</p>
        <h1>{heading}</h1>
        <p>{des}</p>
        <button className="btn btn-course" onClick={()=>{
          navigate(path)
        }}>{btnName}</button>
      </div>
      <div className="hero-right">
        <img
          src={imgUrl}
          alt="hero img"
          width={"800"}
          height={"800"}
        />
        <div className="tutor">
          <img
            src="./assets/b0figxkm.webp"
            alt="tutor"
            width={"266"}
            height={"256"}
          />
          <img
            src="./assets/8z0y7c2r.webp"
            alt="video"
            width={"444"}
            height={"224"}
          />
          <img
            src="./assets/7849viwa.webp"
            alt="success"
            width={"500"}
            height={"211"}
          />
        </div>
        <div className="video"></div>
      </div>
      
    </div>
  );
};

export default Hero;
