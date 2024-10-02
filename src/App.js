 
import { useState } from 'react';
import './App.css'
import CourseList from './CourseList';

function App() {
  const[courseList, setCourseList] = useState([])
  const[course, setCourse] = useState('')
  const[isUpload, setIsUpload] = useState(false)

  const newData = {
    course:course,
    id: Math.floor(Math.random() * 100 ),
    isUpload : false
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    setCourseList((preveData) =>{
      return [...preveData , newData]
    })
    setCourse('')
  }

  const handleDelete = (newid) =>{
    setCourseList(courseList.filter(({id}) => {
      return newid !== id
    }))
  }

  const handleUpload = () =>{
      setIsUpload(true)
      
  }

  return (
    <div className={`App`}>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          onChange={(e) => setCourse(e.target.value)}
          value={course}
          />
        <button>Add New</button>
      </form>
      <CourseList  setIsUpload={setIsUpload}  handleUpload = {handleUpload} courseList= {courseList}  handleDelete ={handleDelete}/>
    </div>
  ); 

}
export default App;