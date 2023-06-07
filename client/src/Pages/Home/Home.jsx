import React from "react";
import "./home.css";
import Hero from "../../Components/Hero/Hero";
import { partnerCompany, testimonialData } from "../../Hooks/Data";
import Card from "../../Components/card-service/Card";
import CardTest from "../../Components/testimonialCard/CardTest";
import Title from "../../Components/Title/Title";
import Features from "../../Components/Features/Features";
import Faq from "../Faq/Faq";
import Instructor4 from "../../Components/InstructorCard/Instructor4";
import { useGloblaHook } from "../../Hooks/Context";
const Home = () => {
  const {titleChange} = useGloblaHook();
  titleChange("Home")
  const heroData = {
    subHeading: "Start your Journey",
    heading: "Your Potential Techniques for Skill Development",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit similique officiis rerum expedita quibusdam voluptas culpa illo non at magnam animi blanditiis",
    btnName: "Show Courses",
    imgUrl: "./assets/hero_boy.webp",
    path: "/courses",
  };

  const courseTitle = {
    subHeading: "Our Courses",
    heading: "Our Most  ",
    heading2: "Popular",
    heading3: "Courses",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  };

  const testimonialsData = {
    subHeading: "Testimonials",
    heading: "Customer ",
    heading2: "Testimonials",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  };

  return (
    <>
      <Hero {...heroData} />
      <div className="blur-green"></div>
      <div className="ptb-10">
        <h1 className="text-center fs-2-5">
          Get in touch with the 250+ companies who Collaboration us
        </h1>
        <div className="d-flex f-wrap f-se ptb-7">
          {partnerCompany.map((ele, id) => {
            return <Card name={ele.name} icon={ele.icon} key={id} />;
          })}
        </div>
      </div>
      <div className="pb-10">
        <Title {...courseTitle} />
      </div>
      <Features />
      <div className="ptb-10">
        <Title {...testimonialsData} />
        <div className="d-grid-3 p-6 grid-sm-1">
          {testimonialData.map((ele, id) => {
            return (
              <CardTest
                name={ele.name}
                img={ele.img}
                role={ele.role}
                key={id}
              />
            );
          })}
        </div>
      </div>
      <Instructor4 />

      <Faq />
    </>
  );
};

export default Home;
