 import { useEffect, useState } from 'react';
import './App.css'
import Hudy from './components/Hudy';
import axios from 'axios';


function App() {
  
  const[data,setData] = useState('')

  const handleClick = (excuses) =>{
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuses}/`).then((res) =>{
      setData(res.data[0].excuse)
    })
  }
  

  return (
    <div className={`App`}>
        <button onClick={() => handleClick('family')}>Excuse Family </button>
        <button onClick={() => handleClick('party')}>Excuse party </button>
        <button onClick={() => handleClick('office')}>Excuse office </button>
        <p>{data}</p>
    </div>
  ); 

}
export default App;