import React, { useState, useEffect } from 'react'
import Home from '../Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Hostels from '../Hostels/Hostels'
import Itinerary from '../Itinerary/Itinerary'
import HostelsContext from '../Hostels/HostelsContext'
import dataSource from '../../data'
import Hostel from '../Hostels/Hostel'

export default function App () {
  const [hostels, setHostels] = useState([])

  useEffect(() => {
    const fetchedHostels = async () => {
      try {
        const response = await fetch(`${dataSource.baseURL}hostels`, {
        method: 'GET',
        headers: dataSource.headers
      })
        const json = await response.json()
        setHostels(json)
      } catch (error) {
        console.error(error)
        return null
      }
    }
    fetchedHostels()
  }, [])

  return (
      <div className="App">
        <HostelsContext.Provider value={{ hostels, setHostels }}>
          <NavBar/>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="hostels/*" element={<Hostels hostels={hostels} />}/>
            <Route path="hostels/:id" element={<Hostel hostels={hostels} />}/>
            <Route path="itinerary" element={<Itinerary />}/>
            <Route path=':id' element={<p>Sorry, that page was not found.</p>}/>
          </Routes>
        </HostelsContext.Provider>
      </div>
  )
}
