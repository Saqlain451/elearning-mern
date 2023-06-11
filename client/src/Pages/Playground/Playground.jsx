import React,{useEffect, useState} from "react";
import { Editor } from "@monaco-editor/react";
import "./playground.css"
import { useGloblaHook } from "../../Hooks/Context";
import Title from "../../Components/Title/Title";
import { useNavigate } from "react-router-dom";
const Playground = () => {
  const navigate = useNavigate();
  const {titleChange,isActiveBtn, changeHandler,btnClassToggle,codeData} = useGloblaHook()
  titleChange("Playground")

  const headingData = {
    subHeading: "PlayGround",
    heading: "Our ",
    heading2: "Html,css,JS",
    heading3 : "Edior",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  }

  useEffect(()=>{
    if (!localStorage.getItem("user")) {
      navigate("/login");
  }
  },[])
  
  const codeSyntax = `
    <!Doctype html>
    <Html>
        <head>
        <style>
            ${codeData.css}
        </style>
        </head>
        <body>
            ${codeData
              .html}
            <script>
            ${codeData.js}
</script>
        </body>
    </Html>
  `;

  return (
    <>
     <div className="p-global bg-light">
     <Title {...headingData}/>
     </div>
      
      <div className="playground grid-sm-1">
        <div className="playground-left">
          <div className="btns">
            <button
              className={isActiveBtn.html ? "btn-active" : ""}
              onClick={btnClassToggle}
            >
              Html
            </button>
            <button
              className={isActiveBtn.css ? "btn-active" : ""}
              onClick={btnClassToggle}
            >
              Css
            </button>
            <button
              className={isActiveBtn.js ? "btn-active" : ""}
              onClick={btnClassToggle}
            >
              Js
            </button>
          </div>
          {isActiveBtn.html && (
            <Editor
              height="90vh"
              defaultLanguage="html"
              defaultValue={codeData.html}
              onChange={changeHandler}
            />
          )}
          {isActiveBtn.css && (
            <Editor
              height="90vh"
              defaultLanguage="css"
              defaultValue={codeData.css}
              onChange={changeHandler}
            />
          )}
          {isActiveBtn.js && (
            <Editor
              height="90vh"
              defaultLanguage="js"
              defaultValue={codeData.js}
              onChange={changeHandler}
            />
          )}
        </div>
        <div className="playground-right">
          <h1 className="text-center text-dark mb-2">Output</h1>
          <iframe srcDoc={codeSyntax}></iframe>
        </div>
      </div>
    </>
  );
};

export default Playground;
