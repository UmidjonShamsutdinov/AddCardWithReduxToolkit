import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/slices/cartSlice'

const Home = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()

  useEffect(()=>{
    axios("https://api.escuelajs.co/api/v1/products")
      .then(response=>setData(response.data))
  },[])
  return (
    <div className='main'>
        {
            data.map(e=>
                <div className='card' key={e.id}>
                    <img src={e.images[0]} alt="" />
                    <b>{e.title}</b>
                    <button onClick={()=> dispatch(ADD(e))}>Add To CARD</button>
                </div>
                )
        }
    </div>
  )
}

export default Home