import React from 'react'
import { useOutletContext } from 'react-router-dom'
const HostVanPhotos = () => {
  const { currentvan } = useOutletContext();
  
  
  return (
    <img src={currentvan.imageUrl} className="host-van-detail-image" />
  )
}

export default HostVanPhotos
