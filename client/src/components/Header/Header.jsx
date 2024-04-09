import React from 'react'
import {Link,NavLink} from 'react-router-dom'

import "./Header.css"

export default function Header(){
  return (
    <div id="navbar"> 
    <ul className='Navbar'> 
    <li><NavLink to='/' >HOME</NavLink></li> 
    <li><NavLink to='/create' >CREATE</NavLink></li> 
    <li><NavLink to='/edit' >Edit</NavLink></li> 
    <li><NavLink to='/login' >LogIn</NavLink></li> 
    <li><NavLink to='/signup' >SignUP</NavLink></li> 
    <li><NavLink to='/logout' >LogOut</NavLink></li> 
    </ul> 
  </div> 
  )}