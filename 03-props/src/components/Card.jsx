import React from 'react'

const Card = (props) => {
  return ( 
        <div className='card'>
            <img src={props.image} alt="" />
            <h2>{props.user}</h2>
            <h4>{props.age}</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, illo?</p>
            <button>View Profile</button>
        </div>
        
  )
}

export default Card