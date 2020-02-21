import React, { Component } from 'react'


const Header = ({ title, subtitle, author, date }) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>
          Instructor:{author.firstName} {author.lastName}
        </p>
        <p>{date}</p>
      </div>
    </header>
  )
}

export default Header
