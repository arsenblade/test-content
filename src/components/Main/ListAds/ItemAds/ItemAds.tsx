import React, { Component } from 'react'
import { IAds } from '../../../../types/ads.type'
import styles from './ItemAds.module.scss'

export default class ItemAds extends Component<{ad: IAds}> {
  constructor(props: {ad: IAds}) {
    super(props)
  }

  shouldComponentUpdate(nextProps: Readonly<{ ad: IAds; }>): boolean {
    return nextProps.ad !== this.props.ad;
  }

  render() {
    return (
      <li className={styles.itemAds}>
        <img src='/img/photo-ad.png' srcSet='/img/photo-ad@2x.png' alt='Photo ad.' width={170} height={128}/>
        <div className={styles.truckingInfo}>
          <h2 className={styles.truckingTitle}>{this.props.ad.title}</h2>
          <div className={styles.truckingLocation}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.26758 19.0088C9.59717 19.5215 10.3662 19.5215 10.6958 19.0088C16.0425 11.3184 17.0312 10.5127 17.0312 7.65625C17.0312 3.77441 13.8818 0.625 10 0.625C6.08154 0.625 2.96875 3.77441 2.96875 7.65625C2.96875 10.5127 3.9209 11.3184 9.26758 19.0088Z" fill="#01B4A8"/>
            </svg>
            <span className={styles.truckingLocationCity}>Екатеринбург</span>
            <span className={styles.truckingLocationDate}>26 сен, вс</span>
          </div>
          <div className={styles.truckingTypes}>
            <span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.82585 2.09416C9.57886 1.78886 10.4212 1.78886 11.1742 2.09416L17.4225 4.6275C17.6917 4.73651 17.9221 4.9234 18.0844 5.16421C18.2467 5.40501 18.3334 5.68878 18.3334 5.97916V14.0233C18.3332 14.3136 18.2464 14.5972 18.0842 14.8378C17.9219 15.0784 17.6915 15.2652 17.4225 15.3742L11.1742 17.9075C10.4212 18.2128 9.57886 18.2128 8.82585 17.9075L2.57752 15.3742C2.30838 15.2651 2.07791 15.0783 1.91564 14.8375C1.75337 14.5966 1.66669 14.3129 1.66669 14.0225V5.98C1.66669 5.68962 1.75337 5.40585 1.91564 5.16504C2.07791 4.92423 2.30838 4.73735 2.57752 4.62833L8.82585 2.095V2.09416ZM10.7042 3.2525C10.2526 3.0695 9.74746 3.0695 9.29585 3.2525L7.70002 3.9L13.9725 6.33916L16.1967 5.48083L10.7034 3.25333L10.7042 3.2525ZM12.2425 7.00666L6.01252 4.58333L3.82502 5.47L10.0009 7.87166L12.2425 7.00666ZM2.91669 14.0233C2.9168 14.0647 2.92922 14.1051 2.95237 14.1394C2.97552 14.1737 3.00835 14.2003 3.04669 14.2158L9.29585 16.7492C9.32169 16.76 9.34835 16.77 9.37502 16.7792V8.97L2.91669 6.45833V14.0233ZM10.7042 16.7492L16.9534 14.2158C16.9918 14.2002 17.0247 14.1735 17.0479 14.139C17.0711 14.1046 17.0834 14.064 17.0834 14.0225V6.47833L10.625 8.97166V16.78C10.6516 16.7706 10.678 16.7606 10.7042 16.75V16.7492Z" fill="#0B1524" fillOpacity="0.66"/>
              </svg>
              Тип груза:
            </span>
            <ul className={styles.truckingListTypes}>
              <li>Личные вещи,</li>
              <li>Стройматериалы,</li>
              <li>Техника и оборудование</li>
              <li>и еще 5 типов</li>
            </ul>
          </div>
        </div>
        <div className={styles.truckingPrice}>
          <span>за 1 час</span>
          <span className={styles.truckingPriceValue}>от 500 ₽</span>
        </div>
      </li>
    )
  }
}
