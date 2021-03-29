import React from 'react'
import Project from './Project'
import portfolio from '../projects.json'


function ProjectList(props) {
  return (
    <div className="wrapper">
      <div className="project">
        <h1 className="title">My Portfolio</h1>
        <hr />
      </div>
      {portfolio.map((project) => (
        <Project project={project} key={project.id} />
      ))}
      <div>
        <div className="container-fluid">
          <div className="row"> {props.children}</div>
        </div>


      </div>
    </div>
  )
}

export default ProjectList
