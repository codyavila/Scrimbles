import React from 'react'
import Masonry from 'react-masonry-css'
import Scrimbl from './Scrimbl'

import { Skeleton } from 'react-loading-skeleton'

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1
}

const MasonryLayout = ({ scrimbls }) => {
  console.log(scrimbls)
  return (
    <div>
        <Masonry
          className='flex animate-slide-fwd'
          breakpointobjcols={breakpointObj}>
          {scrimbls?.map((scrimbl) => (
            <Scrimbl key={scrimbl._id} scrimbl={scrimbl} className='w-max' />
          ))}
        </Masonry>
    </div>
  )
}

export default MasonryLayout
