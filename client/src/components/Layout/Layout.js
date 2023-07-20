import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children,title}) => {
  document.title = title
  return (
    <>
        <Nav/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout