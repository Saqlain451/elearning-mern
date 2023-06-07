import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Pnf = () => {
  const navigate = useNavigate();
  
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/")
    },5000)
  },[])
  return (
    <>
      <div className="pnf" style={{
        width : "100%",
        height : "100vh",
        display : "grid",
        "placeItems" : "center"
      }}>
        <div>
          <img
            src="https://assets.website-files.com/63edcc04ea8777a0bc4eed69/63f87442a4d6a7628bb9feda_Frame%20(4)-p-500.webp"
            alt="pnf"
            style={{ display:"block", margin: "auto", width:"90%", height:"auto" }}
          />
          <button className="btn btn-course" onClick={()=>{navigate("/")}} style={{ display:"block", margin: "auto" }}>Go To Home</button>
        </div>
      </div>
    </>
  );
};

export default Pnf;
