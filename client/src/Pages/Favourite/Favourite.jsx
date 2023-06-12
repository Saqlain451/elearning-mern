import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGloblaHook } from '../../Hooks/Context'
import CourseCard from '../../Components/card/CourseCard'
const Favourite = () => {
    const navigate = useNavigate()
    const{getInsApiData,url,isLoading,isError} = useGloblaHook()
    const [favData, setFavData] = useState([]);
    useEffect(()=>{
        if(localStorage.getItem("user")){
            const user = JSON.parse(localStorage.getItem("user"))
            const mail = user.mail;
            // console.log(user.mail);
            getInsApiData(`${url}/allFav/${mail}`,setFavData);
        }else{
            navigate("/login");
        }
    },[])
  return (
    <>
        <div className="instructor-hero bg-light p-relative">
        <h1 className="text-center fs-5">Your Favourite Courses</h1>
        <div className="shape-left"></div>
        <div className="shap-right"></div>
       </div>
       <div className="p-global" style={{background:"#eaeaea"}}>
        {isLoading? <p>Loading....</p> :
        isError?<p className='text-centr fs-3 text-red ptb-5 text-center'>You Have no Data added in favourite</p>:
        <div className="grid-4">
            {
                favData.map((ele)=>{
                    // console.log(ele);
                    return(  
                        <CourseCard {...ele} key={ele._id} path={`/courses/${ele.course_id}`}/>
                    )
                }) 
            }
        </div>
       }
       
       </div>
        
    </>
  )
}

export default Favourite