import React from 'react'
import Topleft from './Topleft'
import Topright from './Topright'

const Topsection = () => {
  return (
    <div className="flex justify-between items-center h-[15vh]">
      <Topleft />
      <Topright />
    </div>
  )
}

export default Topsection
