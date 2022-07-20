import React, { useState } from 'react'
import { ArrowRightAltOutlined, ShoppingCartOutlined, CancelOutlined, Settings } from "@material-ui/icons";
import Typical from 'react-typical'

const Info = ({ navdis, setNavdis, theme, setTheme, infodi, setInfodi, setAboutdi, setServdi, setContdi, setPortdi, home, setHome, about, setAbout, services, setServices, portfolio, setPortfolio, contact, setContact }) => {
    const [disp, setDisp] = useState("none")
    const [disp2, setDisp2] = useState("block")

    const toAbout = () => {
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

    const brownth = () => {
        setTheme("brown")
        localStorage.setItem("Atlastheme", "brown")
    }
    const orangeth = () => {
        setTheme("orange")
        localStorage.setItem("Atlastheme", "orange")
    }
    const tealth = () => {
        setTheme("teal")
        localStorage.setItem("Atlastheme", "teal")
    }
    const tanth = () => {
        setTheme("tan")
        localStorage.setItem("Atlastheme", "tan")
    }
    const pinkth = () => {
        setTheme("pink")
        localStorage.setItem("Atlastheme", "pink")
    }

    return (
        <div className='infosli' style={{ display: infodi }} onClick={() => { setNavdis("none") }}>
            <div className='info'>
                <div className='infos'>
                    <h1 className='headers'>Hello my name is <span className='spans' style={{ color: theme }}>Abdulazeez</span></h1>
                    <h1 className='headersxy'>I'm a <span className='spans' style={{ color: theme, fontFamily: "cursive" }}>
                        <Typical 
                           
                            loop={Infinity}
                            wrapper="i"
                            steps={
                                [
                                    'Website Developer',
                                    1000,
                                    'Native Apps DevOps',
                                    1000,
                                    'Frontend Developer',
                                    1000,
                                    'Robotics Enthusiast',
                                    1000,
                                    'Backend Engineer',
                                    1000,
                                    'Student Architect',
                                    1000
                                ]
                            }
                        /></span></h1>
                    <p className='paraxy'>I'm a Software developer with extensive experience and zeal for exploring various technologies. My expertise is in Front and Back end software development.</p>
                    <button className='btn2' style={{ borderColor: theme }} onClick={toAbout}>More About Me <span className='spans' style={{ color: theme }}></span> </button>
                </div>
                <div className='img1'>

                </div>
            </div>
            <div className='theme' style={{ display: disp }}>
                <center>
                </center>
                <p style={{ fontWeight: "bolder", fontSize: "large" }}>Theme Colors</p>
                <div className='colors'>
                    <div className='brown' onClick={brownth}></div>
                    <div className='orange' onClick={orangeth}></div>
                    <div className='teal' onClick={tealth}></div>
                    <div className='tan' onClick={tanth}></div>
                    <div className='pink' onClick={pinkth}></div>
                </div>
            </div>
        </div>
    )
}

export default Info