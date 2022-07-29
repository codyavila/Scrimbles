import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../client'
import MasonryLayout from './MasonryLayout.jsx'
// import Spinner from './Spinner'
import { feedQuery, searchQuery } from '../utils/data'

const Feed = () => {
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()
  const [scrimbls, setScrimbls] = useState(null)

  useEffect(() => {
    setLoading(true)

    if (categoryId) {
      const query = searchQuery(categoryId)
      client.fetch(query).then((data) => {
        setScrimbls(data)
        setLoading(false)
      })
    } else {
      client.fetch(feedQuery).then((data) => {
        setScrimbls(data)
        setLoading(true)
      })
    }
  }, [categoryId])

  return( <div>
    {scrimbls && <MasonryLayout scrimbls={scrimbls}/>}
  </div>
  )
}

export default Feed
