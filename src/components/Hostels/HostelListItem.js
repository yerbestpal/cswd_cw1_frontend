import React from "react"
import { ListGroupItem } from "react-bootstrap"
import { Link, Routes, Route } from "react-router-dom"

const HostelListItem = ({ hostel }) => {
  const sum = hostel.ratings.reduce((a, b) => a + b, 0)
  const avg = (sum / hostel.ratings.length) || 0
  return (
    <>
      <ListGroupItem>
        <Link to={`/hostels/${hostel.id}`} className="text-decoration-none fs-4">
          <div className='d-flex justify-content-between'>
            <span>{hostel.name}</span>
            <span>Avg. Rating: {'⭐️ '.repeat(avg)}</span>
          </div>
        </Link>
      </ListGroupItem>

      <Routes>
        <Route path='hostel' element={<p>Sorry, we couldn't find that hostel.</p>}/>
      </Routes>
    </>
  )
}
export default HostelListItem