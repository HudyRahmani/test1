 
import { useState } from 'react';
import './App.css'

function App() {
  const[courseList, setCourseList] = useState([])
  const[course, setCourse] = useState('')

  return (
    <div className={`App`}>
      <form >
        <input 
          type='text' 
          onChange={(e) => setCourse()}
        />
        <button>Add New</button>
      </form>
    </div>
  ); 

}
export default App;