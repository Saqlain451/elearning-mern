import React from 'react'
import "./course.css"
import {BsCurrencyRupee,BsLightbulb,BsFillPersonFill,BsStar,BsTranslate,BsFillSuitHeartFill,BsSuitHeart} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
const Course = ({title,price,description,type, author,language,img,intro,path,favBtnClick,course_id}) => {
  const navigate = useNavigate();
  return (
    
    <>
        <div className="instructor-hero bg-light p-relative">
        <h1 className="text-center fs-5">{title}</h1>
        <div className="shape-left"></div>
        <div className="shap-right"></div>
      </div>

      <div className="course-description p-global bg-light">
        <div className="course-left">
          <h1 className="fs-3 text-dark">Course Description</h1>
          <p className="mt-2 fs-1-5">
            {description}
          </p>
          <iframe className="mt-2"
            width="100%"
            height="397"
            frameBorder={"0"}
            src={intro}
            allowFullScreen
          ></iframe>
        </div>
        <div className="course-right">

        <div className="card-single-course">
            <img src={img} alt="" />
            <i className="heart" onClick={()=>{favBtnClick({title,price,description,type,img, author,course_id})}}><BsSuitHeart/></i>
            <div className="single-course-container">
            <p>{title}</p>
            <p><i><BsCurrencyRupee/></i>  <span>Price :</span>  {price} </p>
            <p><i><BsLightbulb/></i>  <span>Type :</span> {type}</p>
            <p><i><BsFillPersonFill/></i> <span>Author :</span>  {author} </p>
            <p><i><BsStar/></i> <span>Access :</span>    Lifetime</p>
            <p><i><BsTranslate/></i>  <span>Language :</span>   {language}</p>
            <button onClick={()=>{navigate(path)}} >Get Course</button>
            </div>
            
        </div>

        </div>
      </div>
    </>
  )
}

export default Course