import React from 'react'
import Home from '../Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Hostels from '../Hostels/Hostels'
import Itinerary from '../Itinerary/Itinerary'

export default function App () {
  return (
      <div className="App">
        <NavBar/>

        <Routes>
          <Route path="/*" element={<Home />}/>
          <Route path="/hostels" element={<Hostels />}/>
          <Route path="/itinerary" element={<Itinerary />}/>
          <Route path='/:id' element={<p>Sorry, that page was not found!</p>}/>
        </Routes>
      </div>
  )
}
