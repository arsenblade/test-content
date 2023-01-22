import React, { Component } from 'react'
import styles from './MobileVersionLinks.module.scss'

export default class MobileVersionLinks extends Component {
  render() {
    return (
      <div className={styles.containerLinks}>
        <a className={styles.links}>
          <img src='/img/app-store-retina.png' alt='App store link.' srcSet='/img/app-store-retina@2x.png' width={112} height={32}/>
        </a>
        <a className={styles.links}>
          <img src='/img/google-play-retina.png' alt='App store link.' srcSet='/img/google-play-retina@2x.png' width={112} height={32}/>
        </a>
      </div>
    )
  }
}
