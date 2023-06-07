import React from "react";
import { faqData } from "../../Hooks/Data";
import FaqComp from "../../Components/FaqComp/FaqComp";
import Title from "../../Components/Title/Title";
import { NavLink } from "react-router-dom";
import "./faq.css";

const Faq = () => {
  const faqTitle = {
    subHeading: "FAQ",
    heading: "Frequently",
    heading2: "Asked",
    heading3: "Questions",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  };
  return (
    <>
      <div className="ptb-10">
        <Title {...faqTitle} />
        <div className="pt-4 faq">
          {faqData.map((ele, id) => {
            return <FaqComp ques={ele.ques} ans={ele.ans} key={id} />;
          })}
          <div className="bg-light p-2 mt-2 br-0-5">
            <h5 className="fs-2 text-center">Still Have Questions ?</h5>
            <p className="fs-1-5 text-dark text-center mt-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <NavLink to={"/contact"}>
              <button className="btn-success">Contact Us</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
