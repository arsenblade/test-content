import React, { Component } from 'react'
import MainPage from './pages';
import MyToastContainer from './ui/MyToast/MyToastContainer';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <MainPage />
        <MyToastContainer />
      </div>
    )
  }
}
