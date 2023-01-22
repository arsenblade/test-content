import React, { Component } from 'react'
import Navigate from './Navigate/Navigate'
import styles from './Header.module.scss'

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Navigate />
      </header>
    )
  }
}
