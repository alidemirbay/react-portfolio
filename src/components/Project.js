import React from 'react'
import { pics } from '../images/pics'
import './project.css'

function Project({ project }) {
  return (

    <div className="col-lg-4 col-md-6 mb-5   " >
      <div className="cards " >
        <img src={pics[parseInt(project.id)]} className="card-img-top" alt={project.name} />
        <div className="card-body text-center ">

          <h5 className="card-title ">{project.name}</h5>
          <p >{project.topics}</p>
          <a className='btn btn-info mr-3' href={project.github}>REPO</a>
          <a className='btn btn-info' href={project.deploy}>DEPLOY</a>

        </div>
      </div>
    </div>
  )
}

export default Project
