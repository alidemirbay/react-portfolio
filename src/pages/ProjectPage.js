import React from 'react'
import ProjectList from '../components/ProjectList'
import Project from '../components/Project'
import portfolio from '../projects.json'
function ProjectPage() {
  return (

    <ProjectList >
      {portfolio.map((project) => (
        <Project project={project} key={project.id} />))}

    </ ProjectList>


  )
}

export default ProjectPage
