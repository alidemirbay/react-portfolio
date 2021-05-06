import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='container' >
      <h1 className="contactme my-5">Let's Know Each Other</h1>
      <div className="row">

        <div className="col-md-9 col-sm-12 " 	>
          <div ><a href='https://www.linkedin.com/in/ali-demirbay/' className="btn icons"><i class='fab fa-linkedin'></i>https://www.linkedin.com/in/ali-demirbay/</a></div>
          <div><a href='https://github.com/alidemirbay' className="btn  icons"><i class='fab fa-github'></i>https://github.com/alidemirbay</a></div>
          <div > <a href='mailto:alidemirbay2@gmail.com' className="btn icons"><i class='fa fa-envelope'></i>alidemirbay2@gmail.com</a></div>
        </div>

      </div>

    </div >
  )
}

export default Contact
