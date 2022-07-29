import React, { useState } from 'react'
import { urlFor } from '../client'

export const Scrimbl = ({
  scrimbl: { title, postedBy, image, _id, destination }
}) => {
  return (
    <div>
      <img
        className='rounded-lg w-full'
        alt={`${title} posted by ${postedBy.userName}`}
        src={urlFor(image).width(250).url()}
      />
    </div>
  )
}

export default Scrimbl
