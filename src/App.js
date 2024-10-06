import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const[data , setData] = useState('')
  const[pri , setPri] = useState('')

  const handlePredictade = () =>{
    axios.get(`https://api.agify.io/?name=${data}`).then((res) =>{
      setPri(res.data)
      console.log(pri)
    })
  }

  return (
    <div className={`App`}>
        <input onChange={(e) => setData(e.target.value)}/>
        <button onClick={handlePredictade}>Predicated</button>
        <p>your age is: {pri&& pri.age } </p>
        <p>and your name is :{pri&& pri.name } </p>
    </div>
  ); 

}
export default App;