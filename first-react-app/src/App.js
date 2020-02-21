import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    const title = 'Getting Started React'
    const subtitle = 'JavaScript library'
    const author = {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh'
    }
    const date = 'Date: Feb 20, 2020'
    const techs = ['HTML', 'CSS', 'JavaScript']
    const copyRight = new Date().getFullYear()

    return (
      <div className='app'>
        <Header title={title} subtitle={subtitle} author={author} date={date} />
        <Main techs={techs} />
        <Footer copyRight={copyRight} />
      </div>
    )
  }
}

export default App
