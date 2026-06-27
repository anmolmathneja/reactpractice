import React from 'react'
import Bottomleft from './Bottomleft'
import Bottomright from './Bottomright'


const Bottomsection = (props) => {
  return (
    <div className="flex justify-between  items-center w-full h-[85vh]">
      <Bottomleft />
      <Bottomright users={props.users}/>
    </div>
  )
}

export default Bottomsection
