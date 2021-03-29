import React from 'react'
import resume from '../images/myresume.pdf';
import './footer.css'
function Footer() {
  return (

    <footer className='footer bg-primary text-center' >
      <div className='container ' >
        <a href='https://www.linkedin.com/in/ali-demirbay/' className="btn icons"><i class='fab fa-linkedin'></i></a>
        <a href='https://github.com/alidemirbay' className="btn  icons"><i class='fab fa-github'></i></a>
        <a href='mailto:alidemirbay@gmail.com' className="btn icons"><i class='fa fa-envelope'></i></a>
        <a href={resume} className="btn icons" title="Resume" target="_blank" rel="noopener noreferrer" ><i className="fas fa-file-pdf"></i></a>
        <p className="copyright mt-1 text-center" > ©Ali Demir 2021 </p>
      </div>
    </footer>

  )
}

export default Footer
