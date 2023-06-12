import React, { useState } from "react";
import "./singleCourse.css";
import Course from "../../Components/course/Course";
import { useGloblaHook } from "../../Hooks/Context";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast,{ Toaster } from "react-hot-toast";

const SingleCourse = () => {
  const navigate = useNavigate();
  const { getInsApiData, course, setCourseData, url } = useGloblaHook();
  const params = useParams();
  const courseId = params.id;

  const favBtnhandler = async ({
    title,
    price,
    description,
    type,
    img,
    author,
    course_id,
  }) => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      const mail = user.mail;
      const favData = {
        title,
        price,
        description,
        type,
        author,
        course_id,
        img,
        mail,
      };
      // console.log(favData)
      const data = await fetch(`${url}/addFav`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ ...favData }),
      });
      const res = await data.json();
      // console.log(res);
      res.err
        ? toast.error(res.err, { position: "bottom-left" })
        : toast.success(res.msg, {
            position: "bottom-left",
          });
    } else {
      navigate("/login");
    }
  };

  useState(() => {
    getInsApiData(`${url}/courses/${courseId}`, setCourseData);
  }, []);
  return (
    <>
      {/* {console.log(course._id)} */}
      <Course
        {...course}
        course_id={course._id}
        favBtnClick={favBtnhandler}
        path={`/courses/videos/${course._id}`}
      />
      <Toaster/>
    </>
  );
};

export default SingleCourse;
