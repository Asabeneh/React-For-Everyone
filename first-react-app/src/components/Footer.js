import React, { Component } from 'react'
import PropTypes from 'prop-types'
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight}</p>
    </div>
  </footer>
)

export default Footer
