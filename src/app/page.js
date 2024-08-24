import React from 'react'
import styles from './homePage.module.css'
import LoginPage from './login/page'
import LoginBox from '@/components/loginBox/loginBox'

function Home() {
  return (
    <div className={styles.container}>
      <LoginPage />
    </div>
  )
}

export default Home