import React from 'react'
import FeatherIcon from 'feather-icons-react'

const Footer = () => {
  return (
    <footer className='mt-auto'>
      <div className={'text-center p-4 bg-dark text-light'}>
        Developed by <a href="https://github.com/yerbestpal/cswd_cw1_frontend" className="text-decoration-none">Ross
        McLean <FeatherIcon icon="github"
                            size="24"/></a>
      </div>
    </footer>
  )
}

export default Footer