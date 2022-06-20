import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../main.css'
import Info from '../components/Info'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import {FaBars} from 'react-icons/fa'
import NavBar from '../components/NavBar'


const Home = () => {
    const [theme, setTheme] = useState("teal")
    const [infodi, setInfodi] = useState("block")
    const [portdi, setPortdi] = useState("none")
    const [contdi, setContdi] = useState("none")
    const [servdi, setServdi] = useState("none")
    const [aboutdi, setAboutdi] = useState("none")
    const [navdis, setNavdis] = useState("none")
    const [home, setHome] = useState("teal")
    const [about, setAbout] = useState("white")
    const [services, setServices] = useState("white")
    const [portfolio, setPortfolio] = useState("white")
    const [contact, setContact] = useState("white")
  

  return (
    <>
     <FaBars className="bar" style={{color: theme}} onClick={() => {navdis == "none" ? setNavdis("block") : setNavdis("none")}}/>
     <NavBar navdis={navdis} setNavdis={setNavdis} theme={theme} setTheme={setTheme} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi}/>
   <div className='portfolio'>
       <Sidebar theme={theme} setTheme={setTheme} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi} home={home} setHome={setHome} about={about} setAbout={setAbout} services={services} setServices={setServices} portfolio={portfolio} setPortfolio={setPortfolio} contact={contact} setContact={setContact}/>
       <Info infodi={infodi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi} theme={theme} setTheme={setTheme} home={home} setHome={setHome} about={about} setAbout={setAbout} services={services} setServices={setServices} portfolio={portfolio} setPortfolio={setPortfolio} contact={contact} setContact={setContact}/>
       <Portfolio portdi={portdi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi} theme={theme} setTheme={setTheme} />
       <About aboutdi={aboutdi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi}  theme={theme} setTheme={setTheme}  home={home} setHome={setHome} about={about} setAbout={setAbout} services={services} setServices={setServices} portfolio={portfolio} setPortfolio={setPortfolio} contact={contact} setContact={setContact}/>
       <Services servdi={servdi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi}  theme={theme} setTheme={setTheme} />
       <Contact contdi={contdi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi}  theme={theme} setTheme={setTheme} />
   </div>
   </>
  )
}

export default Home