import React,{ useState } from "react";
import "./faq.css";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdRemove } from "react-icons/io";
const FaqComp = ({ ques, ans }) => {
  const [isAns, setisAns] = useState(false);
  return (
    <div className="bg-light p-2 br-0-5 mt-2" onClick={() => {
        setisAns(isAns ? false : true);
      }}>
      <h6 className="fs-2 g-1" style={{ display: "flex" }}>
        <span
          className="text-green plus fs-2-5"
        >
          {isAns ? <IoMdRemove /> : <AiOutlinePlus />}
        </span>
        {ques}
      </h6>
      {isAns ? <p className="fs-1-5 mt-1">{ans}</p> : ""}
    </div>
  );
};

export default FaqComp;
