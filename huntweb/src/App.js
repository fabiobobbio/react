import React, { Component } from 'react'
import Header from './components/Header';
import './styles.css'
import Main from './pages/main'
import Routes from './routes'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    )
  }
}
