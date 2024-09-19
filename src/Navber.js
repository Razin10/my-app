import React from 'react'
import './style.css'

export default function Navber() {
  return (
    <>
    <nav className='navber'>
    <h1 className='navhad'>RAZIN</h1>
        <ul className='navber-menu'>
            <li><a href='/' className='navli'>HOME</a></li>
            <li><a href='/About' className='navli'>ABOUT</a></li>
            <li><a href='/Blog' className='navli'>BLOG</a></li>
            <li><a href='/contacts' className='navli'>CONTACTS</a></li>
        </ul>
    </nav>
    </>
  )
}
