import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Hudy() {
    const[text , setText] = useState('')
    useEffect(() => {
         
      },[])
    
  return (
    <div>
        <input type='text' onChange={(e) => setText(e.target.value)} />
        <p>{text}</p>
    </div>
  )
}
