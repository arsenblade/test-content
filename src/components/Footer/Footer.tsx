import React, { Component } from 'react'
import styles from './Footer.module.scss'
import FooterNavigation from './FooterNavigation/FooterNavigation'
import MobileVersionLinks from './MobileVersionLinks/MobileVersionLinks'
import SocialList from './SocialList/SocialList'

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.content}>
          <FooterNavigation />
          <MobileVersionLinks />
          <SocialList />
        </div>
      </footer>
    )
  }
}
