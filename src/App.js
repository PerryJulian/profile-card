import './App.css';
import React from 'react'
import ProfileCard from './components/ProfileCard'
import styled from 'styled-components'
import circleRight from './assets/bg-pattern-bottom.svg'
import circleLeft from './assets/bg-pattern-top.svg'
import breakpoints from './breakpoints'

const data = {
  firstName: 'Victor',
  lastName: 'Crest',
  age: 26,
  hometown: 'London',
  followersCount: '80K',
  likesCount: '803k',
  photosCount: '1.4k'
}

const CircleLeft = styled.img`
  position: absolute;
  left: -50%;
  top: -25%;
  width: 100%;

  @media ${breakpoints.device.lg} {
    top: -130%;
  }
`

const CircleRight = styled.img`
  bottom: -40%;
  position: absolute;
  right: -100%;
  width: 150%;

  @media ${breakpoints.device.lg} {
    bottom: -123%;
    right: -25%;
    width: 80%;
  }
`

function App() {
  return (
    <div className="App">
        <CircleLeft src={circleLeft}/>
        <CircleRight src={circleRight}/>
        <ProfileCard data={data}/>
    </div>
  );
}

export default App;
