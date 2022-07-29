import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../client'
import MasontryLayout from './MasonryLayout.jsx'
// import Spinner from './Spinner'
import { Skeleton } from 'react-loading-skeleton'
import { feedQuery, searchQuery } from '../utils/data'

const Feed = () => {
  const { categoryId } = useParams()
  const [scrimbls, setScrimbls] = useState(null)

  useEffect(() => {
    if (categoryId) {
      const query = searchQuery(categoryId)
      client.fetch(query).then((data) => {
        setScrimbls(data)
      })
    } else {
      client.fetch(feedQuery).then((data) => {
        setScrimbls(data)
      })
    }
  }, [categoryId])

  return( <div>
    {scrimbls && <MasontryLayout scrimbls={scrimbls}/>}
  </div>
  )
}

export default Feed
