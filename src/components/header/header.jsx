import React from 'react'
import css from './header.module.css'
import NavBar from '../navBar/navBar'
import Intro from '../intro/intro'
const Header = ({src}) => {
  return (
    <div className={css.header}>
        <NavBar/>
        <Intro  src={src}/>
    </div>
  )
}

export default Header