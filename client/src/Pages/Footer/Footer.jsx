import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css"

import Icons from "../../Components/Icons/Icons";
const Footer = () => {
  return (
    <div className="ptb-10 bg-dark ">
      <div className="grid-4 plr-6 grid-sm-1 grid-md-2">
        <div className="text-center">
          <h1 className="fs-2-5">
            Bong <span className="text-green">Coder</span>
          </h1>
          <p className="fs-1-5 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="footer-pages text-center">
            <h5 className="text-green fs-2-5">Pages</h5>
            <ul className="mt-2 fs-1-5">
                <li> <NavLink to={"/"}>Home</NavLink> </li>
                <li> <NavLink to={"/about"}>About</NavLink></li>
                <li> <NavLink to={"/courses"}>Courses</NavLink></li>
                <li> <NavLink to={"/instructor"}>Instructors</NavLink></li>
                <li> <NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
        </div>
        <div className="footer-pages text-center">
            <h5 className="text-green fs-2-5">Utility Pages</h5>
            <ul className="mt-2 fs-1-5">
                <li> <NavLink to={"/register"}>Register</NavLink> </li>
                <li> <NavLink to={"/login"}>Log In</NavLink></li>
                <li> <NavLink to={"/playground"}>playground</NavLink></li>
                <li> <NavLink to={"/pnf"}>Page Not Found</NavLink></li>
                <li> <NavLink to={"/faq"}>Faq</NavLink></li>
            </ul>
        </div>
       <Icons/>

      </div>
    </div>
  );
};

export default Footer;
