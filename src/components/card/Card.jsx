import React from 'react'
import "./Card.css"
import { useSelector } from 'react-redux'

const Card = () => {
  const data = useSelector(state => state.cart_data.cart)
  
  return (
    <div className='main'>
        {
            data.map(e=>
                <div className='card' key={e.id}>
                    <img src={e.images[0]} alt="" />
                    <h3>{e.title}</h3>
                </div>
                )
        }
    </div>
  )
}

export default Card