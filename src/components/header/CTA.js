import React from 'react'
import CV from '../../assets/Resume.docx'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV}download className='btn'>Download Resume</a>
        <a href='#contact'className='btn btn-primary'>Let's Discuss</a>
    </div>
  )
}

export default CTA