import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css";
import { GoThreeBars } from 'react-icons/go';
import { useGloblaHook } from '../../Hooks/Context';
import {AiOutlineHome} from 'react-icons/ai'
import {BsBookHalf,BsCodeSlash,BsFillPersonFill,BsFillGridFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const {navbarToggle, show} = useGloblaHook()
  const [useName, setUserName] = useState({
    name : "",
    isLoggedIn : false,
  });
  const storedUser = localStorage.getItem("user")

  const loginClick = ()=>{
    navigate("/register")
  }
  const logoUtClick = ()=>{
    localStorage.removeItem('user');
    navigate("/")
    setUserName({
      isLoggedIn : false
    })
  }
  useEffect(()=>{
    if (storedUser) {
      const user = JSON.parse(storedUser);
      const userName = user.name.split(" ")
      setUserName({
        name : userName[0],
        isLoggedIn : true
      })
    } 
  },[navigate])
  
  return (
    <>
      <header className= {show? "show" : ""}>
        <div className="navbar-logo">
          <NavLink to={"/"}><h1>Bong <span>Coder</span> </h1></NavLink> 
        </div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li> <NavLink to={"/"} onClick={navbarToggle}>Home</NavLink></li>
            <li> <NavLink to={"/about"} onClick={navbarToggle}>about</NavLink></li>
            <li> <NavLink to={"/courses"} onClick={navbarToggle}>Courses</NavLink></li>
            <li> <NavLink to={"/playground"} onClick={navbarToggle}>playground</NavLink></li>
            <li> <NavLink to={"/instructor"} onClick={navbarToggle}>instructor</NavLink></li>
          </ul>
        </nav>
        <div className="log-in">
          
          {useName.isLoggedIn? <p className='fs-1-5' onClick={logoUtClick}>{useName.name}</p>:
          <button className="btn-login" onClick={loginClick}> <BsFillPersonFill/></button>
          }
          
          <span className='bar' onClick={navbarToggle}>  <GoThreeBars />  </span>
        </div>
      </header>

      {/* designing for mobile devices */}
      <div className="navbar-mobile">
          <ul className="navbar-list-mobile">
            <li> <NavLink to={"/"}> <span><AiOutlineHome/></span>  Home</NavLink></li>
            <li> <NavLink to={"/about"}> <span><BsFillGridFill/></span> about</NavLink></li>
            <li> <NavLink to={"/courses"}> <span><BsBookHalf/></span> Courses</NavLink></li>
            <li> <NavLink to={"/playground"}> <span><BsCodeSlash/></span>  playground</NavLink></li>
            <li> <NavLink to={"/instructor"}> <span><BsFillPersonFill/></span>instructor</NavLink></li>
          </ul>
        </div>

       
    </>
  )
}

export default Navbar