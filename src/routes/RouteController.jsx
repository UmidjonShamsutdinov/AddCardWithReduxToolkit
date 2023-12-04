import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Card from '../components/card/Card'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card' element={<Card/>}/>
    </Routes>
  )
}

export default RouteController