import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../client'
import MasontryLayout from './MasonryLayout.jsx'
// import Spinner from './Spinner'
import { Skeleton } from 'react-loading-skeleton'
import { feedQuery, searchQuery } from '../utils/data'

const Feed = () => {
  const { categoryId } = useParams()
  const [scrimbl, setScrimbl] = useState(null)

  useEffect(() => {
    if (categoryId) {
      const query = searchQuery(categoryId)
      client.fetch(query).then((data) => {
        setScrimbl(data)
      })
    } else {
      client.fetch(feedQuery).then((data) => {
        setScrimbl(data)
      })
    }
  }, [categoryId])

  return <div>Feed</div>
}

export default Feed
