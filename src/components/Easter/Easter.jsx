import React from 'react'
import Header from './Header/Header'
import Reward from './Reward/Reward';
import AboutTheEgg from './AboutTheEgg/AboutTheEgg';
import InputContact from './input/Input';

export default function Easter() {
  return (
    <div>
      <React.Fragment>
        <Header/>
        <Reward />
        <AboutTheEgg />
        <InputContact />
      </React.Fragment>
    </div>
  )
}