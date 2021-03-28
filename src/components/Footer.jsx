import React from 'react'
import resume from '../images/myresume.pdf';
function Footer() {
  return (
    <>
      <footer className='footer bg-primary text-center' style={{ padding: '20px 20px' }}>


        <div className='container mb-3' >
          <a href='https://www.linkedin.com/in/ali-demirbay/' className="btn  icons"><i class='fab fa-linkedin '
            style={{ fontSize: 30, color: '#E8E8E8', marginRight: '30px' }}></i></a>
          <a href='https://github.com/alidemirbay' className="btn  icons"><i class='fab fa-github'
            style={{ fontSize: 30, color: '#E8E8E8', marginRight: '30px' }}></i></a>
          <a href='mailto:alidemirbay@gmail.com' className="btn icons"><i class='fa fa-envelope '
            style={{ fontSize: 30, color: '#E8E8E8', marginRight: '30px', }}></i></a>
          <a href={resume} className="btn  icons" title="Resume" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 30, color: '#E8E8E8' }}><i className="fas fa-file-pdf"></i></a>

          <br />
          <p className="copyright mt-2 text-center" style={{ color: 'white', marginRight: '30px', marginTop: '15px' }}>
            © Ali Demir 2021
            </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
