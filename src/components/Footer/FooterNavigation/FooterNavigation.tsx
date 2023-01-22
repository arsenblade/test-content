import React, { Component } from 'react'
import styles from './FooterNavigation.module.scss'

export default class FooterNavigation extends Component {
  render() {
    return (
      <nav className={styles.navigation}>
        <div className={styles.cell}>
          <a href='#'>О проекте</a>
          <a href='#'>Блог</a>
          <a href='#'>Безопасность</a>
        </div>
        <div className={styles.cell}>
          <a href='#'>Способы оплаты</a>
          <a href='#'>Обратная связь</a>
          <a href='#'>Вопросы и ответы</a>
        </div>
        <div className={styles.cell}>
          <a href='#'>Автовокзалы России</a>
          <a href='#'>Автобусные направления</a>
          <a href='#'>Расписание автобусов</a>
        </div>
        <div className={styles.cell}>
          <a href='#'>Популярные маршруты</a>
          <a href='#'>СМИ и Рекламодателям</a>
        </div>
      </nav>
    )
  }
}
