import React from 'react'
import {FaFacebook,FaLinkedin} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import "./instructor.css"
const InstructorCard = ({img,fname,role,lname}) => {
  return (
    <>
        <div className="ins-card">
            <img src={img} alt="" />
            <div className='d-flex space-between'>
                <div>
                    <h3 className='fs-2 text-dark'>{fname}</h3>
                    <h3 className='fs-2 text-dark'>{lname}</h3>
                    <p className='fs-1-5 text-green'>{role}</p>
                </div>
                <div className='d-flex g-0-5'>
                    <span className='text-green bg-light'><FaFacebook/></span>
                    <span className='text-green bg-light'><FaLinkedin/></span>
                    <span className='text-green bg-light'><RiInstagramFill/></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default InstructorCard