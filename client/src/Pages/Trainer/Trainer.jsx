import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGloblaHook } from "../../Hooks/Context";
import "./trainer.css";
import Icons from "../../Components/Icons/Icons";
const Trainer = () => {
  const { trainer, getInsApiData, setTrainer,url } = useGloblaHook();
  const params = useParams();
  const trainerId = params.id;
  const { fname, lname, img, about, role } = trainer;
  
  const newUrl = url+"/allInstructor/"+trainerId;
  useEffect(() => {
    getInsApiData(
      newUrl,
      setTrainer
    );
  }, []);
  return (
    <>
      <div className="instructor-hero bg-light p-relative">
        <h1 className="text-center fs-5">
          {fname} {lname}
        </h1>
        <div className="shape-left"></div>
        <div className="shap-right"></div>
      </div>
      <div className="trainer p-global">
        <img src={img} alt={fname} />
        <h1 className="fs-3 mt-2 text-center">
          {fname} {lname}
        </h1>
        <p className="fs-2 text-center mt-1">{role}</p>
        <Icons />
        <p className="text-center mt-2 text-dark">{about}</p>
      </div>
    </>
  );
};

export default Trainer;
