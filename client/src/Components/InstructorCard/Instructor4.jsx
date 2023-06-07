import React, { useEffect } from "react";
import InstructorCard from "./InstructorCard";
import Title from "../Title/Title";
import { NavLink } from "react-router-dom";
import { useGloblaHook } from "../../Hooks/Context";

const Instructor4 = () => {
  const { instructor} = useGloblaHook();
  const instructData = {
    subHeading: "Team Members",
    heading: "Our Expert",
    heading2: "Instructors",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  };
 
  return (
    <>
      <div className="ptb-10 bg-light instructor">
        <Title {...instructData} />
        <div className="grid-4 p-6 grid-sm-1 grid-lg-2">
          {instructor.map((ele, id) => {
            console.log(ele._id);
            if (id < 4) {
              return (
                <NavLink to={`/instructor/${ele._id}`} key={id}>
                  <InstructorCard
                    fname={ele.fname}
                    role={ele.role}
                    img={ele.img}
                    lname={ele.lname}
                  />
                </NavLink>
              );
            }
          })}
        </div>
        <NavLink to={"/instructor"}>
          <button className="btn-success-outline"> See All Instructors</button>
        </NavLink>
      </div>
    </>
  );
};

export default Instructor4;
