import React from 'react'
import Banner from './Banner'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
      <Banner />
      <NavBar />
    </header>
  )
}

export default React.memo(Header)