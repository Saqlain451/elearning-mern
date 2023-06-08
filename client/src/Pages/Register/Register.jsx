import React from "react";
import { AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineLockPerson,MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { useGloblaHook } from "../../Hooks/Context";
const Register = () => {
  const navigate = useNavigate();
  const {registerData,regChangeHanler,regSubHandler,isRegisterd,titleChange} = useGloblaHook();
  titleChange("Sign Up")
  if(isRegisterd){
    navigate("/login")
  }
  return (
    <>
      <div className="d-flex p-global" style={{ background: "#eaeaea" }}>
      
        <div className="signup-card grid-sm-1">
          <img src="./assets/update.png" alt="sign" />
          <form >
          <h1 className="text-green fs-2-5">Sign Up</h1>
            <div className="input-feild">
              <span className="text-green fs-2">
                <BsFillPersonFill />
              </span>
              <input type="text" placeholder="Name" name="name" value={registerData.name}  onChange={regChangeHanler}/>
            </div>
            <div className="input-feild">
              <span className="text-green fs-2">
                <MdOutlineLockPerson/>
              </span>
              <input type="text" placeholder="Profession" name="profession" value={registerData.profession} onChange={regChangeHanler}/>
            </div>
            <div className="input-feild">
              <span className="text-green fs-2">
                <MdEmail/>
              </span>
              <input type="email" placeholder="Email id:" name="mail" value={registerData.mail} onChange={regChangeHanler} required/>
            </div>
            <div className="input-feild">
              <span className="text-green fs-2">
                <AiFillLock />
              </span>
              <input type="password" placeholder="Password" name="pass" value={registerData.pass} onChange={regChangeHanler} required
                minLength={8}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"/>
            </div>
            <div className="input-feild">
              <span className="text-green fs-2">
                <RiLockPasswordFill />
              </span>
              <input type="password" placeholder="Confirm Password" name="cpass" value={registerData.cpass} onChange={regChangeHanler}/>
            </div>
            <div className="btns">
              <button onClick={regSubHandler}>Sign Up</button>
              <button onClick={()=>{navigate("/login")}}>
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
