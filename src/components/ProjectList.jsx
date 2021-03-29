import React from 'react'
import './projectList.css'


function ProjectList(props) {
  return (
    <div className="wrapper">
      <div className="project">
        <h1 className="title">My Portfolio</h1>   <hr />
      </div>

      <div className="container-fluid">
        <div className="row"> {props.children} </div>
      </div>
      <div className='last'> </div>

    </div>

  )
}

export default ProjectList
