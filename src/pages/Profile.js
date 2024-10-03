import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProvideContext } from './Context'

export default function Profile() {
  const {name} = useContext(ProvideContext)
  return (
    <div>HR Codding {name}</div>
  )
}
