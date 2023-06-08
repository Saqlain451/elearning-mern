import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { useGloblaHook } from "../../Hooks/Context";
import  { Toaster } from 'react-hot-toast';
const Login = () => {
  const navigate = useNavigate();
  const { loginData, loginChangeHandler, loginHanlder, isLoggedIn,titleChange } =
    useGloblaHook();
    titleChange("Log in")
  if (isLoggedIn) {
    setTimeout(() => {
      navigate("/");
    },3000);
  }
  return (
    <>
      <div className="d-flex p-global" style={{ background: "#eaeaea" }}>
        <div className="login-card grid-sm-1">
          <form autoComplete="off">
            <h1 className="text-green fs-2-5 text-center">Log In</h1>
            <div className="input-feild">
              <span className="text-green fs-2">
                <BsFillPersonFill />
              </span>
              <input
                type="email"
                placeholder="Email id:"
                name="mail"
                value={loginData.mail}
                onChange={loginChangeHandler}
                required
              />
            </div>
            <div className="input-feild">
              <span className="text-green fs-2">
                <AiFillLock />
              </span>
              <input
                type="password"
                placeholder="Password"
                name="pass"
                value={loginData.pass}
                onChange={loginChangeHandler}
                required
                minLength={8}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
              />
            </div>
            <div className="btns">
              <button onClick={loginHanlder}>Login</button>
              <button>
                <NavLink to={"/register"}>Sign Up</NavLink>
              </button>
            </div>
            <button>Forgot Password</button>
          </form>
          <img src="./assets/sign.png" alt="sign" />
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default Login;
