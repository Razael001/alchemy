import React, { useState } from 'react'
import { ArrowRightAltOutlined, ShoppingCartOutlined, CancelOutlined, Settings } from "@material-ui/icons";


const Info = ({ theme, setTheme, infodi, setInfodi, setAboutdi, setServdi, setContdi, setPortdi,  home, setHome, about, setAbout, services, setServices, portfolio, setPortfolio, contact, setContact}) => {
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

    return (
        <div className='infosli' style={{ display: infodi }}>
            <div className='info'>
                <div className='infos'>
                    <h1 className='headers'>Hello my name is <span className='spans' style={{ color: theme }}>Abdulazeez</span></h1>
                    <h1 className='headers'>I'm a <span className='spans' style={{ color: theme }}>Full Stack Software Developer</span></h1>
                    <p className='para'>I'm a web developer with extensive experience and zeal for exploring various technologies. My expertise is in Front and Back end website development and app development.</p>
                    <button className='btn1' style={{ borderColor: theme }} onClick={toAbout}>More About Me <span className='spans' style={{ color: theme }}><ArrowRightAltOutlined /></span> </button>
                </div>
                <div className='img1'>

                </div>
            </div>
            <Settings style={{ color: "white", float: " right", padding: "30px", display: disp2, color: "white" }} onClick={() => { setDisp(disp == "none" ? "block" : "none") }} />
            <div className='theme' style={{ display: disp }}>
                <center>
                </center>
                <p style={{ fontWeight: "bolder", fontSize: "large" }}>Theme Colors</p>
                <div className='colors'>
                    <div className='brown' onClick={() => { setTheme("brown") }}></div>
                    <div className='orange' onClick={() => { setTheme("orange") }}></div>
                    <div className='teal' onClick={() => { setTheme("teal") }}></div>
                    <div className='tan' onClick={() => { setTheme("tan") }}></div>
                    <div className='pink' onClick={() => { setTheme("pink") }}></div>
                </div>
            </div>
        </div>
    )
}

export default Info