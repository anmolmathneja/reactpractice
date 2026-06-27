import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <h3>Logo</h3>
        <button className={styles.btn}>Menu</button>
      </div>
    </div>
  )
}

export default Header
