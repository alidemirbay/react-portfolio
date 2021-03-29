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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse praesentium dolore nostrum quo suscipit fugit, itaque neque harum ipsa optio at, ratione quidem modi blanditiis libero quam hic quos illum!
                 </p>

          <p className='aboutme-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis, dolorem dicta culpa cupiditate quam atque a ut illum id sapiente, reiciendis optio quo pariatur quisquam vitae aut architecto totam?
            Recusandae unde maxime accusamus pariatur eum suscipit vitae corporis soluta? Rem, placeat dicta cumque, soluta est quae non voluptates quasi minus mollitia dolores sint! Nam recusandae beatae sequi hic reprehenderit.
                  </p>
        </div>
      </div>
    </div>
  )
}

export default About
