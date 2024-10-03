import React, { useContext } from 'react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import ChangeUsername from '../components/ChangeUsername'


export default function Contact() {
  let navigate = useNavigate()
  
  return (
    <React.Fragment>
      <div>Contact</div>
      <Profile  />
      <ChangeUsername />
    </React.Fragment>
  )
}
