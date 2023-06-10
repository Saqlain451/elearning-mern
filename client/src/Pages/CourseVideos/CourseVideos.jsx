import React, { useEffect, useState } from "react";
import { useGloblaHook } from "../../Hooks/Context";
import { useParams } from "react-router-dom";
import "./videopage.css";
const CourseVideos = () => {
  
  const { getInsApiData, url } = useGloblaHook();
  const [videodata, setVideoData] = useState({});
  const { videos,intro, title} = videodata;
  const [btnId, setBtnId] = useState();
  const [isActive, setIsActive] = useState(false);
  const params = useParams();
  const courseId = params.id;
  
  useEffect(() => {
    getInsApiData(`${url}/courses/${courseId}`, setVideoData);
  }, []);
  return (
    <>
      <div className="instructor-hero bg-light p-relative">
        <h1 className="text-center fs-5">{title}</h1>
        <div className="shape-left"></div>
        <div className="shap-right"></div>
      </div>
      
      <div className="video-page p-global">
        
        <div className="video-page-left">
          {!isActive && <iframe src={intro} width={"100%"} height="397"></iframe>}
          {videos &&
            videos.map((ele) => {
              if (btnId === ele._id) {
                return (
                  <iframe
                    src={ele.url}
                    frameborder="0"
                    width={"100%"}
                    height="397"
                  ></iframe>
                );
              }
            })}
        </div>
        <div className="video-page-right">
         
          {videos &&
            videos.map((ele) => {
              return (
                <li
                  key={ele._id}
                  onClick={() => {
                    setBtnId(ele._id);
                    setIsActive(true)
                  }}
                >
                  {ele.title}
                </li>
              );
            })}
            
        </div>
      </div>
    </>
  );
};

export default CourseVideos;
