import React from 'react'
import { ArrowBigRight } from 'lucide-react'

const Cards = (props) => {
  return (
    <div className="flex rounded-xl flex-col relative w-[30%] shrink-0 h-full bg-yellow-400">
        <img src={props.image} alt="" className="w-full h-full object-cover rounded-t-xl" />
        <div style={{backgroundColor:props.color}} className="text-white text-bold absolute top-3 rounded-full h-7.5 w-7.5 flex justify-center items-center left-3">
           {props.id+1}
        </div>
        <p className="absolute bottom-12 p-4 w-full text-[20px] font-bold text-white">
            {props.intro}
        </p>
        <div className="absolute bottom-3 p-3 w-full flex justify-between items-center">
        <button style={{backgroundColor:props.color}} className=" rounded-full px-6 py-1.5 text-[14px] font-bold">{props.tag}</button>
        <button className="text-black rounded-full ml-2 bg-white p-1" style={{backgroundColor:props.color}}><ArrowBigRight  className="size-5" /></button>
        </div>
    </div>
  )
}

export default Cards
