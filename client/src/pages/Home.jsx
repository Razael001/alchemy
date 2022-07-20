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
import Skills from '../components/Skills'

const Home = () => {
    var themm = localStorage.getItem("Atlastheme") || "teal" ;
    const [theme, setTheme] = useState(themm)
    const [infodi, setInfodi] = useState("block")
    const [skilldi, setSkilldi] = useState("none")
    const [portdi, setPortdi] = useState("none")
    const [contdi, setContdi] = useState("none")
    const [servdi, setServdi] = useState("none")
    const [aboutdi, setAboutdi] = useState("none")
    const [navdis, setNavdis] = useState("none")
    const [home, setHome] = useState("teal")
    const [about, setAbout] = useState("white")
    const [skill, setSkill] = useState("white")
    const [services, setServices] = useState("white")
    const [portfolio, setPortfolio] = useState("white")
    const [contact, setContact] = useState("white")
  

  return (
    <div>
     <FaBars className="bar" style={{color: theme}} onClick={() => {navdis == "none" ? setNavdis("block") : setNavdis("none")}}/>
     <NavBar navdis={navdis} setNavdis={setNavdis} theme={theme} setTheme={setTheme} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi}  home={home} setHome={setHome} about={about} setAbout={setAbout} services={services} setServices={setServices} portfolio={portfolio} setPortfolio={setPortfolio} contact={contact} setContact={setContact}  skill={skill} setSkill={setSkill} skilldi={skilldi} setSkilldi={setSkilldi}/>
   <div className='portfolio'>
       <Sidebar skill={skill} setSkill={setSkill} skilldi={skilldi} setSkilldi={setSkilldi} navdis={navdis} setNavdis={setNavdis} theme={theme} setTheme={setTheme} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi} home={home} setHome={setHome} about={about} setAbout={setAbout} services={services} setServices={setServices} portfolio={portfolio} setPortfolio={setPortfolio} contact={contact} setContact={setContact}/>
       <Info skill={skill} setSkill={setSkill} skilldi={skilldi} setSkilldi={setSkilldi} navdis={navdis} setNavdis={setNavdis} infodi={infodi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi} theme={theme} setTheme={setTheme} home={home} setHome={setHome} about={about} setAbout={setAbout} services={services} setServices={setServices} portfolio={portfolio} setPortfolio={setPortfolio} contact={contact} setContact={setContact}/>
       <Portfolio skill={skill} setSkill={setSkill} skilldi={skilldi} setSkilldi={setSkilldi} navdis={navdis} setNavdis={setNavdis} portdi={portdi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi} theme={theme} setTheme={setTheme} />
       <About skill={skill} setSkill={setSkill} skilldi={skilldi} setSkilldi={setSkilldi} navdis={navdis} setNavdis={setNavdis} aboutdi={aboutdi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi}  theme={theme} setTheme={setTheme}  home={home} setHome={setHome} about={about} setAbout={setAbout} services={services} setServices={setServices} portfolio={portfolio} setPortfolio={setPortfolio} contact={contact} setContact={setContact}/>
       <Services skill={skill} setSkill={setSkill} skilldi={skilldi} setSkilldi={setSkilldi} navdis={navdis} setNavdis={setNavdis} servdi={servdi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi}  theme={theme} setTheme={setTheme} />
       <Contact skill={skill} setSkill={setSkill} skilldi={skilldi} setSkilldi={setSkilldi} navdis={navdis} setNavdis={setNavdis} contdi={contdi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi}  theme={theme} setTheme={setTheme} />
      <Skills skill={skill} setSkill={setSkill} skilldi={skilldi} setSkilldi={setSkilldi} navdis={navdis} setNavdis={setNavdis} contdi={contdi} setAboutdi={setAboutdi} setInfodi={setInfodi} setServdi={setServdi} setContdi={setContdi} setPortdi={setPortdi}  theme={theme} setTheme={setTheme} />

   </div>
   </div>
  )
}

export default Home