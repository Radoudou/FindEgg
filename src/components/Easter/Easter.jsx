import React from 'react'
import Header from './Header/Header'
import Reward from './Reward/Reward';
import AboutTheEgg from './AboutTheEgg/AboutTheEgg';

export default function Easter() {
  return (
    <div>
      <React.Fragment>
        <Header/>
        <Reward />
        <AboutTheEgg />
      </React.Fragment>
    </div>
  )
}