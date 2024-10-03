import React, { useContext } from 'react'
import { ProvideContext } from './Context'


export default function Home(props) {
    const {name:username} = useContext(ProvideContext)
  return (
    <>
        <div>Home</div>
        <p>{username}</p>
    </>
  )
}
