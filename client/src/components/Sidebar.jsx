import React, { useEffect, useState } from 'react'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";


const Sidebar = ({theme, setTheme, setInfodi, setAboutdi, setServdi, setContdi, setPortdi, home, setHome, about, setAbout, services, setServices, portfolio, setPortfolio, contact, setContact}) => {
 
  useEffect(() => {
    if(home !== "white") {
      setHome(theme)
    }
    else if(about !== "white"){
      setAbout(theme)
    }
    else if(services !== "white"){
      setServices(theme)
    }
    else if(portfolio !== "white"){
      setPortfolio(theme)
    }
    else if(contact !== "white"){
      setContact(theme)
    }
  }, [theme])

  const homeset = () => {
    setHome(theme)
    setAbout("white")
    setServices("white")
    setPortfolio("white")
    setContact("white")
    setInfodi("block")
    setAboutdi("none")
    setContdi("none")
    setServdi("none")
    setPortdi("none")
  }
  const aboutset = () => {
    setHome("white")
    setAbout(theme)
    setServices("white")
    setPortfolio("white")
    setContact("white")
    setInfodi("none")
    setAboutdi("block")
    setContdi("none")
    setServdi("none")
    setPortdi("none")
  }
  const servicesset = () => {
    setHome("white")
    setAbout("white")
    setServices(theme)
    setPortfolio("white")
    setContact("white")
    setInfodi("none")
    setAboutdi("none")
    setContdi("none")
    setServdi("block")
    setPortdi("none")
  }
  const portfolioset = () => {
    setHome("white")
    setAbout("white")
    setServices("white")
    setPortfolio(theme)
    setContact("white")
    setInfodi("none")
    setAboutdi("none")
    setContdi("none")
    setServdi("none")
    setPortdi("block")
  }
  const contactset = () => {
    setHome("white")
    setAbout("white")
    setServices("white")
    setPortfolio("white")
    setContact(theme)
    setInfodi("none")
    setAboutdi("none")
    setContdi("block")
    setServdi("none")
    setPortdi("none")
  }

  return (
    <div className='sidebar_container'>
      <center>
        <div className="hhgf" style={{borderTop: `5px solid ${theme}`, borderRight: `5px solid ${theme}`, marginLeft: "160px", marginBottom: "0"}}></div>
        <div className='logo' style={{margin: "0", padding: "0"}}>Atlas</div>
        <div className="hhga" style={{borderBottom: `5px solid ${theme}`, borderLeft: `5px solid ${theme}`, marginRight: "160px"}}></div>
        <div className='links'>
          <div>
            <p className='list' style={{color: home}} onClick={homeset}>Home</p>
            <div className='line'/>
            </div>
          <div>
            <p className='list' style={{color: about}} onClick={aboutset}>About</p>
            <div className='line'/>
          </div>
          <div>
            <p className='list' style={{color: services}} onClick={servicesset}>Services</p>
            <div className='line'/>
          </div>
          <div>
            <p className='list' style={{color: portfolio}} onClick={portfolioset}>Portfolio</p>
            <div className='line'/>
          </div>
          <div>
            <p className='list' style={{color: contact}} onClick={contactset}>Contact</p>
            <div className='line'/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Sidebar