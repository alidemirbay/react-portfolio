import React from 'react'
import { pics } from '../images/pics'
import './project.css'

function Project({ project }) {
  return (

    <div className="col-lg-4 col-md-6 mb-5   " >
      <div className="cards " >
        <img src={pics[parseInt(project.id)]} className="card-img-top" alt={project.name} />
        <div className="card-body text-center ">

          <h3 className="card-title ">{project.name}</h3>
          <p >{project.topics}</p>
          <a className='btn btn-info mr-5' href={project.github}>VIEW REPO</a>
          <a className='btn btn-info' href={project.deploy}>VIEW APP</a>

        </div>
      </div>
    </div>
  )
}

export default Project
