import React from 'react'
// import images from '../images'
import { pics } from '../images/pics'





function Project({ project }) {
  return (

    <div className="col-lg-4 col-md-6 mt-4 cards "    >
      <div className="cardContainer" >

        <img style={{ height: 300 }} src={pics[parseInt(project.id)]} className="card-img-top" alt={project.name} />
        <div className="card-body ">
          <br />
          <p className="card-title ">{project.name}</p>
          <p>{project.topics}</p>
          <a href={project.github}>GO TO REPO</a>
          <a href={project.deploy}>GO TO APP</a>

        </div>
      </div>
    </div>
  )
}

export default Project
