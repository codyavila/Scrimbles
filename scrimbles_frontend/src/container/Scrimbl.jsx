import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  Navbar,
  Feed,
  ScrimblDetail,
  CreateScrimbl,
  Search
} from '../components'

const Scrimbl = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/category/:categoryId' element={<Feed />} />
          <Route
            path='/scrimbl/:scrimblId'
            element={<ScrimblDetail user={user} />}
          />
          <Route
            path='/create-scrimbl'
            element={<CreateScrimbl user={user} />}
          />
          <Route
            path='/search'
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default Scrimbl
