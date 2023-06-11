import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
const appContext = React.createContext();
const AppProvider = ({ children }) => {
  const url = import.meta.env.VITE_API_URL;
  //*  Title change------------------------>
  const titleChange = (str) => {
    return (document.title = str);
  };
  //* Navbar part  ------------------->
  const [show, setShow] = useState(false);
  const navbarToggle = () => {
    show ? setShow(false) : setShow(true);
  };

  // * Start of courses part ----------------------->
  const [allCourses, setAllCourses] = useState([])
  const [isError, setisError] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [course, setCourseData] = useState({})
  const getPostApiData =async (api,inpData,setData)=>{
    setisError(false);
    setIsLoading(true);
    try {
      const data = await fetch(api,{
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body : JSON.stringify({...inpData})
      })
      const res = await data.json();
      res?setIsLoading(false) : setIsLoading(true);
      (res.success)?
      setData(res.success) : setisError(true);
    } catch (error) {
      console.log(error)
    }
  }

  

  // * start instructor part ---------------->

  const [instructor, setallInstructors] = useState([]);
  const [trainer, setTrainer] = useState({});
 
  const getInsApiData = async (url, setData) => {
    setIsLoading(true)
    try {
      const data = await fetch(url);
      const res = await data.json();
      // console.log(res);
      res? setIsLoading ( false) : setIsLoading(true)
      setData(res.success);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInsApiData(`${url}/allInstructor`, setallInstructors);
  }, []);
  // * End of instructor --------------------------------->

  


  // * Start register part ----------------------------->

  const [registerData, setRegisterData] = useState({
    name: "",
    profession: "",
    mail: "",
    pass: "",
    cpass: "",
  });

  const [isRegisterd, setIsRegistered] = useState(false);
  const regChangeHanler = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setRegisterData({ ...registerData, [name]: value });
  };

  const postApiData = async (api, inpData, setFunc) => {
    try {
      const data = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...inpData }),
      });

      const res = await data.json();
      console.log(res);
      if (res.msg) {
        toast.success(res.msg, {
          position: 'bottom-center',
        });
        if(res.userDetails){
          localStorage.setItem(
            "user",
            JSON.stringify({ ...res.userDetails})
        );
        }
        setFunc(true);
        
      } else {
        toast.error(res.err,{
          position: 'bottom-center',
        })
        // setFunc(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const regSubHandler = (e) => {
    e.preventDefault();
    postApiData(`${url}/register`, registerData,setIsRegistered);
    setRegisterData({
      name: "",
      profession: "",
      mail: "",
      pass: "",
      cpass: "",
    });
  };

  // * strt login part ----->

  const [loginData, setLoginData] = useState({
    mail: "",
    pass: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginHanlder = (e) => {
    e.preventDefault();
    postApiData(`${url}/login`, loginData,setIsLoggedIn);
    setLoginData({
      mail: "",
      pass: "",
    });
  };

  //* playground part ----------------------------------->

  const [isActiveBtn, setIsActiveBtn] = useState({
    html: true,
    css: false,
    js: false,
  });
  const [codeData, setCodeData] = useState({
    html: "",
    css: "",
    js: "",
  });

  const btnClassToggle = (e) => {
    const name = e.target.innerText;
    console.log(name);
    if (name === "Css") {
      setIsActiveBtn({
        css: true,
      });
    } else if (name === "Js") {
      setIsActiveBtn({
        js: true,
      });
    } else if (name === "Html") {
      setIsActiveBtn({
        html: true,
      });
    }
  };

  const changeHandler = (value, e) => {
    if (isActiveBtn.html) {
      setCodeData({ ...codeData, html: value });
    } else if (isActiveBtn.css) {
      setCodeData({ ...codeData, css: value });
    } else if (isActiveBtn.js) {
      setCodeData({ ...codeData, js: value });
    }
    console.log(changeState);
  };
  // * End of playground ------------------------------------------>

  return (
    <appContext.Provider
      value={{
        navbarToggle,
        show,
        titleChange,
        isActiveBtn,
        changeHandler,
        btnClassToggle,
        codeData,
        instructor,
        trainer,
        getInsApiData,
        setTrainer,
        url,
        registerData,
        regChangeHanler,
        regSubHandler,
        loginData,
        loginChangeHandler,
        loginHanlder,
        isRegisterd,
        isLoggedIn,
        allCourses,
        setAllCourses,
        getPostApiData,
        isError,
        isLoading,
        course,
        setCourseData,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGloblaHook = () => useContext(appContext);

export { useGloblaHook, AppProvider };
