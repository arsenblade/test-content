import React, { Component } from 'react'
import { AdsAction, AdsState } from '../../../store/reducers/adsReducer.type'
import { IAds } from '../../../types/ads.type'
import { connect } from 'react-redux'
import {compose, Dispatch} from 'redux'
import ItemAds from './ItemAds/ItemAds'
import styles from './ListAds.module.scss'
import { MyToast } from '../../../ui/MyToast/MyToast'
import { RootState } from '../../../store/reducers'
import { fetchAds } from '../../../store/action-creators/ads.action'

interface IListAds {
  ads: AdsState,
  fetchAds: (startAds: number, limitAds: number) => (dispatch: Dispatch<AdsAction>) => Promise<void>
}

class ListAds extends Component<IListAds, {startAds: number, limitAds: number, vueAlert: boolean}> {
  constructor (props: IListAds) { 
    super (props) 
    this.state = {
      startAds: 0,
      limitAds: 30,
      vueAlert: false
    }
  }

  async componentDidMount(): Promise<void>  {
    document.addEventListener('scroll', this.scrollHandler)
    this.props.fetchAds(this.state.startAds ,this.state.limitAds)
    this.setState({limitAds: 10, startAds: 30})
  }

  componentDidUpdate(prevProps: Readonly<IListAds>, prevState: Readonly<{ startAds: number; limitAds: number; vueAlert: boolean; }>): void {
    if(this.state.vueAlert !== prevState.vueAlert && this.state.vueAlert === true) {
      console.log(123)
      MyToast('поездок больше не найдено')
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('scroll', this.scrollHandler)
  }

  scrollHandler = () => {
    if(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 150 
      && this.props.ads.loading === false 
      && this.state.startAds < 103) {

      if(this.state.startAds >= 90) {
        this.props.fetchAds(this.state.startAds ,this.state.limitAds)
        this.setState({limitAds: 3, startAds: this.state.startAds + 10})
      }
      else {
        this.props.fetchAds(this.state.startAds ,this.state.limitAds)
        this.setState({limitAds: 10, startAds: this.state.startAds + 10})
      }
    }

    if(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 150  
      && this.state.startAds >= 103 
      && this.state.vueAlert === false) {
      this.setState({vueAlert: true}) 
    }
  }

  render() {
    if(this.props.ads.loading === false && this.props.ads.ads.length === 0) {
      return <h2 className={styles.noAdsTitle}>Объявлений нет</h2>
    }

    return (
      <ul className={styles.listAds}>
        {this.props.ads.ads.map(ad => <ItemAds key={ad.id} ad={ad}/>)}
        {this.props.ads.loading && (<div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>)}
      </ul>
    )
  }
}


let mapStateToProps = (state: RootState) => {
  return {
    ads: state.ads
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
      fetchAds: (startAds: number, limitAds: number) => dispatch(fetchAds(startAds ,limitAds))
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(ListAds)