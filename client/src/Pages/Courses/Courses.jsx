import React from 'react'
import Hero from '../../Components/Hero/Hero'
import "./course.css"
import Instructor4 from '../../Components/InstructorCard/Instructor4'
import Faq from '../Faq/Faq'
import { useGloblaHook } from '../../Hooks/Context'
const Courses = () => {
  const {titleChange} = useGloblaHook();
  titleChange("Courses");
  const courseHero = {
    subHeading: "About",
    heading: "The Future of Classical Education",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit similique officiis rerum expedita quibusdam voluptas culpa illo non at magnam animi blanditiis",
    btnName: "Practice Coading",
    path:"/playground",
    imgUrl : "https://assets.website-files.com/63edcc04ea8777a0bc4eed69/63ff1711b965c62ca168464e_About%20Image%20(4)-p-800.webp"
  }
  return (
    <div className='course'>
      <Hero {...courseHero}/>
      <div className="blur-green"></div>
      <Instructor4/>
      <Faq/>
    </div>
  )
}

export default Courses