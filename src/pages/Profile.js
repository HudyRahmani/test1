import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contextProvider } from '../App'

export default function Profile(props) {
    const {username} = useContext(contextProvider)
  return (
    <div>
        <h2>Profile</h2>
        <p>{username}</p>
        <Link to={'/ChangeProfile'}>ChangeProfile</Link>
    </div>
  )
}