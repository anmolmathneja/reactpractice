import React from 'react'
import {Save, StickyNote} from 'lucide-react'
const Card = (props) => {

  return (
     <div className='card'>
          <div className='top'>
            <img className='compimg' src='https://webgraphiz.com/_next/image?url=https%3A%2F%2Fcdn.geekboots.com%2Fweb%2Famazon-a-icon-1749470197138.png&w=3840&q=75' />
            <button className='btnsave'>Save <Save size={14}/></button>
          </div>
          <div className='center'>
            <h2>{props.companyname} <span>{props.posted}</span></h2>
            <h3>{props.title}</h3>
            <span className='label'>{props.level}</span>
          </div>
          <div className='bottom'>
            <div className='jobdetails'>
              <h3 className='price'>{props.salary}</h3>
              <small>{props.location}</small>
            </div>
            <button className='btnapply'>Apply <StickyNote size={12}/></button>
          </div>
        </div>
  )
}

export default Card
