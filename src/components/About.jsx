import React from 'react'
import './about.css'
import ali from '../images/ali.png'




function About() {
  return (


    <div className='container'>
      <h1 className="aboutMe my-5">Hi, I'm Ali Demir</h1>
      <div className="row">
        <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center" >
          <div> <img className="" src={ali} alt="Ali Demir" /> </div>
        </div>
        <div className="col-md-9 col-sm-12 " 	>
          <p className='aboutme-description' >
            I am a full stack web developer with a background in teaching chemistry. Recently earned a certificate in full stack development from University of Washington. After long experience in education my new passion is web development.
                 </p>

          <p className='aboutme-description'>
            I am proactive in learning new skills and knowledge with core competency in full-stack web development such as JavaScript, HTML, CSS, jQuery, React, NodeJS, MongoDB and SQL. Life-long dedication to learning and in self development. Quick-learner, organized, collaborative communicator. I look forward to bringing my skills and passion for software development to build user focused applications.
                  </p>
        </div>
      </div>
    </div>
  )
}

export default About
