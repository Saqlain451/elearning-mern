import React from 'react'
import "./service.css"
const Service = () => {
  return (
    <>
        <div className="d-grid-2 g-1">
            <div className="service-left">
                <h1 className='fs-4-5'>You can take many courses on one platform</h1>
                <p className='fs-2 text-dark mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                <ul className='mt-2'>
                    <li className='fs-1-5 text-dark fw-7 mt-2'>✅ 24/7 online support</li>
                    <li className='fs-1-5 text-dark fw-7 mt-2'>✅ live class and question answer</li>
                    <li className='fs-1-5 text-dark fw-7 mt-2'>✅ 98% Students Satisfaction</li>
                </ul>
            </div>
            <div className="service-right">
                <img src="./assets/stud-1.webp" alt="" />
                <div className="images">
                    <img src="./assets/dotted.png" alt="" />
                    <img src="./assets/dotted.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Service