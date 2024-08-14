import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {

   const ref = useRef(null);

    const data=[{
        desc: "DOCS.", 
        filesize: ".9mb", 
        close: true, 
        
        tag: {isOpen: true, tagTitle: "Note", tagColor: "green"},
    },{
        desc: "Sleek React app for effortless document creation and management.", 
        filesize: ".9mb", 
        close: true, 
        tag: {isOpen: true, tagTitle: "Note", tagColor: "blue"},
    },{
        desc: "A project created by Aaryan Beniwal", 
        filesize: ".9mb", 
        close: true, 
        tag: {isOpen: false, tagTitle: "Note", tagColor: "green"},
    },];
  return (
      <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
      {data.map((item, index)=>(
       <Card data={item} reference={ref} /> 
      ))}
     

    </div>
  )
}

export default Foreground
