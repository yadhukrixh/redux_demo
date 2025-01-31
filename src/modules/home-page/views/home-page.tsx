import React from 'react';
import styles from './home-page.module.css';
import LeftContainer from '../components/left-container/left-container';
import RightContainer from '../components/right-container/right-container';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <LeftContainer/>
      <RightContainer/>
    </div>
  )
}

export default HomePage
