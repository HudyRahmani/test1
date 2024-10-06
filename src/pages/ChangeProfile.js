import React, { useContext, useState } from 'react'
import { contextProvider } from '../App'

export default function ChangeProfile() {

    const {username , setUsername} = useContext(contextProvider)
    const [name ,setName] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        setName('')
    }

  return (
    <div>
        <h2>ChangeProfile</h2>
        <form onSubmit={handleSubmit}>
            <p>{username}</p>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setUsername(name)}>ChangeProfile</button>
        </form>

    </div>
  )
}
