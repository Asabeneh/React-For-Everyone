import React, { Component } from 'react'

const Header = ({ title, subtitle, author, date }) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>React for Everyone</h1>
      </div>
    </header>
  )
}

export default Header
