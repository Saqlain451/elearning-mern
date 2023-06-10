import React, { useEffect, useState } from 'react'
import { useGloblaHook } from '../../Hooks/Context'
import { useParams } from 'react-router-dom';

const CourseVideos = () => {
  const {getInsApiData, url} = useGloblaHook();
  const [videodata, setVideoData] = useState({})
  
  const params = useParams();
  const courseId = params.id;
  console.log(courseId);
  useEffect(()=>{
    getInsApiData(`${url}/courses/${courseId}`,setVideoData)
  },[])
  console.log(videodata);
  return (
    <div>CourseVideos</div>
  )
}

export default CourseVideos