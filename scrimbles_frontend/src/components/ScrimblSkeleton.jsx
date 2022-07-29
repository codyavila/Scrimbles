import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const ScrimblSkeleton = () => {
  return (
    <SkeletonTheme baseColor='#00000' highlightColor='#444'>
      <Skeleton width={100} height={100} count={10} />
    </SkeletonTheme>
  )
}

export default ScrimblSkeleton
