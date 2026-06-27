import React from 'react'
import Cards from './Cards'

const Bottomright = (props) => {
    
    
  return (
    <div className="flex flex-nowrap overflow-x-auto p-5  w-[70%] h-full gap-7">
       { props.users.map(function(elem,idx){
            return <Cards key={idx} id={idx} image={elem.img} intro={elem.intro} color={elem.color} tag={elem.tag} />
        })}
    </div>
  )
}

export default Bottomright
