import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {RiMessage3Fill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const {activeNav, setActiveNav} = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><HiHome /></a>
      <a href='#about'><FaUser /></a>
      <a href='#experience'><MdSchool/></a>
      <a href='#services'><RiServiceFill/></a>
      <a href='#contact'><RiMessage3Fill/></a>
    </nav>
  )
}

export default Nav