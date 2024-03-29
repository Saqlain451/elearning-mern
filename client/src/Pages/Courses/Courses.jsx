import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import "./course.css";
import Instructor4 from "../../Components/InstructorCard/Instructor4";
import Faq from "../Faq/Faq";
import { useGloblaHook } from "../../Hooks/Context";
import CourseCard from "../../Components/card/CourseCard";
import Title from "../../Components/Title/Title";
import {BsSearch} from 'react-icons/bs'
const Courses = () => {
  const {
    titleChange,
    getInsApiData,
    allCourses,
    setAllCourses,
    url,
    getPostApiData,
    isLoading,
    isError,
  } = useGloblaHook();
  titleChange("Courses");
  const courseHero = {
    subHeading: "About",
    heading: "The Future of Classical Education",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit similique officiis rerum expedita quibusdam voluptas culpa illo non at magnam animi blanditiis",
    btnName: "Practice Coading",
    path: "/playground",
    imgUrl:
      "https://assets.website-files.com/63edcc04ea8777a0bc4eed69/63ff1711b965c62ca168464e_About%20Image%20(4)-p-800.webp",
  };
  const [searchText, setSearchText] = useState({
    title: "",
  });
  const [isactiveBtn, setIsActiveBtn] = useState({
    All: true,
    Frontend: false,
    Backend: false,
    DataBase: false,
  });

  const btnClickHandler = (e) => {
    const btnName = e.target.innerText;
    getPostApiData(`${url}/courses/type`, { type: btnName }, setAllCourses);
    setIsActiveBtn({ [btnName]: true });
  };

  const allBtnClick = (e) => {
    const btnName = e.target.innerText;
    getInsApiData(`${url}/allcourses`, setAllCourses);
    setIsActiveBtn({ [btnName]: true });
  };

  const searchBtnClick = () => {
    getPostApiData(`${url}/courses/title`, { ...searchText }, setAllCourses);
    setSearchText({
      title: "",
    });
  };

  useEffect(() => {
    getInsApiData(`${url}/allcourses`, setAllCourses);
  }, []);

  return (
    <div className="course">
      <Hero {...courseHero} />
      <div className="blur-green"></div>
      <div className="p-global mt-2" style={{ background: "#eaeaea" }}>
        <div className="search-box">
          <input
            type="text"
            placeholder="Find a course name"
            name="title"
            value={searchText.title}
            onChange={(e) => {
              setSearchText({ title: e.target.value });
            }}
          />
          <button onClick={searchBtnClick}> <BsSearch/> </button>
        </div>
        <div className="course-btns">
          <button
            className={isactiveBtn.All ? "active-btn" : ""}
            onClick={allBtnClick}
          >
            All
          </button>
          <button
            className={isactiveBtn.Frontend ? "active-btn" : ""}
            onClick={btnClickHandler}
          >
            Frontend
          </button>
          <button
            className={isactiveBtn.DataBase ? "active-btn" : ""}
            onClick={btnClickHandler}
          >
            DataBase
          </button>
          <button
            className={isactiveBtn.Backend ? "active-btn" : ""}
            onClick={btnClickHandler}
          >
            Backend
          </button>
        </div>

        {isLoading ? (
          <p>loading</p>
        ) : !isError ? (
          <div className="grid-4 grid-sm-1 grid-md-2 grid-lg-3">
            {allCourses.map((ele) => {
              const { title, img, price, type, author } = ele;
              const newEle = { title, img, price, type, author };
              return (
                <CourseCard
                  {...newEle}
                  key={ele._id}
                  path={`/courses/${ele._id}`}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-centr fs-3 text-red ptb-5 text-center">
            No Search Data found
          </p>
        )}
      </div>
      <Instructor4 />
      <Faq />
    </div>
  );
};

export default Courses;
