import React from 'react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'


export default function Contact() {
  let navigate = useNavigate()
  return (
    <React.Fragment>
      <div>Contact</div>
      <Profile />
      <button onClick={() => { navigate("/") }}>Go To Home</button>
    </React.Fragment>
  )
}
