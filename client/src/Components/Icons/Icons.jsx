import React from "react";
import {FaFacebookSquare,FaInstagramSquare,FaGithubSquare,FaLinkedin} from 'react-icons/fa'
import "./icons.css"
const Icons = () => {
  return (
    <>
      <div className="social text-center">
        <h5 className="text-green fs-2-5">Social Media</h5>
        <ul className="mt-2 fs-1-5 d-flex space-around">
          <li>
            <a href="https://github.com/Saqlain451">
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Hydra_Saqlain">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hydra_saqlain/">
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sakil-mustak-8680b8206/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Icons;
