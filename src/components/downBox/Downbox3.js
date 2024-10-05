import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice, decrement, increment, incrementby } from '../../redux/counterSlice'
import { addChildren } from '../../redux/userSlice'

export default function Downbox3() {

  const counter = useSelector(state => state.counter.value)
  const user = useSelector(state => state.user.child )
  const dispatch = useDispatch()
  
 
  return (
    <div>
      
        <div style={{backgroundColor:'#dfd', height:'100px',margin:'20px'}}>
            <h2>{user}</h2>
            <button onClick={() => dispatch(addChildren(['zobair','sudis']))}>add</button>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>descremnt</button>
            <button onClick={() => dispatch(incrementby(2))}>Increment by 2</button>
            <p>count:{counter}</p>
            <p>{user}</p>
        </div>
    </div>
  )
}
