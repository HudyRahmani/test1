import React from 'react'

export default function CourseList(props) {
  return (
    <div>
        {props.courseList && props.courseList.map((list,index) =>(
        <div key={index}  style={{ background:'blue'}}>
          <span>{list.course}</span> <button onClick={() => props.handleDelete(list.id)}>X</button>
          <button onClick={props.handleUpload}>isUpload</button>
        </div>
      ))}
    </div>
  )
}
