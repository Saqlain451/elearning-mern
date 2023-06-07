import React from 'react'

const Card = ({icon,name}) => {
    
  return (
    <div className="d-flex text-secondary g-0-5">
        <p className='fs-4'>{icon}</p>
        <h1 className='fw-8 fs-3'>{name}</h1>
    </div>
  )
}

export default Card