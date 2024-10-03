import React, { useContext, useState } from 'react'
import { ProvideContext } from '../pages/Context'
 

export default function ChangeUsername() {
    const [username , setUsername] = useState('')
    const {setName} = useContext(ProvideContext)
  return (
    <div>
        <input type='text'
            onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => {setName(username)}}>ChangeUsername</button>
    </div>
  )
}
