import React, { useContext } from 'react'
import { contextProvider } from '../App'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function Home() {

    const {username} = useContext(contextProvider)
    const {data ,isLoading,isError} = useQuery([] ,async() =>{
        return axios.get('https://catfact.ninja/fact').then((res)=>res.data.fact)
    })
    if(isLoading)return <h2>loadding...</h2>
    if(isError)return <h2>loadding...</h2>
  return (
    <div>
        <h2>Home</h2>
        
        <p>{data}</p>
        <p>{username}</p>
    </div>
  )
}
