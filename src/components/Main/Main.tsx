import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose, Dispatch} from 'redux'
import { fetchAds } from '../../store/action-creators/ads.action'
import { RootState } from '../../store/reducers'
import { AdsAction, AdsState } from '../../store/reducers/adsReducer.type'
import { MyToast } from '../../ui/MyToast/MyToast'
import { getCorrectTitle } from '../../utils/getCorrectTitle'
import ListAds from './ListAds/ListAds'
import styles from './Main.module.scss'

interface IMain {
  ads: AdsState,
}


class Main extends Component<IMain, {}> {

  render() {
    return (
      <section className={styles.main}>
        <h1 className={styles.title}>Найдено: {this.props.ads.ads.length} {getCorrectTitle(this.props.ads.ads.length)}</h1>
        <ListAds />
      </section>
    )
  }
}


let mapStateToProps = (state: RootState) => {
  return {
    ads: state.ads
  }
}

export default compose(connect(mapStateToProps, {}))(Main)