import React from 'react'
import Questions from '../Components/Questions'
import Content from '../Components/Content'
import Services from '../Components/Services'
import Growth from '../Components/Growth'
import Clients from '../Components/Clients'
import Intro from '../Components/Intro'


const HomePage = () => {
  return (
    <>
      <Intro />
      <Clients />
      <Growth />
      <Services />
      <Questions />
      <Content />
    </>
  )
}

export default HomePage