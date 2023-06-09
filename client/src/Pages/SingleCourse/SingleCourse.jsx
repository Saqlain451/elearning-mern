import React, { useState } from "react";
import "./singleCourse.css";
import Course from "../../Components/course/Course";
import { useGloblaHook } from "../../Hooks/Context";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const {getInsApiData, course,setCourseData,url} = useGloblaHook()
  const params = useParams();
  const courseId = params.id;
  useState(()=>{
    getInsApiData(`${url}/courses/${courseId}`,setCourseData)
  },[])
  return (
    <>
      <Course {...course}/>
    </>
  );
};

export default SingleCourse;
