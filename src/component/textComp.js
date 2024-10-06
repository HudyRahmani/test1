import React, { useEffect, useState } from 'react'

export default function TextComp() {
    const[text , setText] = useState('')
    const[list , setList] = useState([])
    const[isSelected , setIsSelected] = useState(false)

    const newData = {
        title : text ,
        id : Math.floor(Math.random() * 100),
        isSelected : false 
    }

    const handleAdd = () =>{
        setList((preve) =>{
            return [...preve ,newData]
        })
        setText('')
    }
    const handleDelete = (eventid) =>{
        setList(list.filter((text) => {
            return text.id !== eventid 
        }))
    }

  return (
    <div>
        <input value={text} type='text' onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        <h2>{
            list.map((lis,index) =>(
                <div key={index} style={{background: isSelected ? '#5f0' : '#fff'}}>
                    <p>{lis.id}- {lis.title}
                    <button onClick={() => handleDelete(lis.id)}> X </button>
                   </p>
                </div>
            ))
        }</h2>
    </div>
  )
}
