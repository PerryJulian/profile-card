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

const Container = styled.div`
  background-color: #19a1ae;
  height: 100vh;
  overflow: hidden;
  padding: 147px 25px;
  position: relative;

  @media ${breakpoints.device.lg} {
    padding-top: 173px;
  }
`

const CircleLeft = styled.img`
  position: absolute;
  left: -55%;
  top: -24%;
  width: 110%;

  @media ${breakpoints.device.lg} {
    top: -50%;
    left: -19%;
    width: 978px;
  }
`

const CircleRight = styled.img`
  bottom: 0;
  position: absolute;
  right: -105%;
  width: 978px;

  @media ${breakpoints.device.lg} {
    top: 346px;
    right: -18%;
    width: 978px;
  }
`

function App() {
  return (
    <Container>
        <CircleLeft src={circleLeft} alt=""/>
        <CircleRight src={circleRight} alt=""/>
        <ProfileCard data={data}/>
    </Container>
  );
}

export default App;
