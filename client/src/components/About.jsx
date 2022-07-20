import { Settings, Check } from '@material-ui/icons'
import React, { useState } from 'react'

const About = ({navdis, setNavdis,  theme, setTheme, aboutdi, setInfodi, setAboutdi, setServdi, setContdi, setPortdi,  home, setHome, about, setAbout, services, setServices, portfolio, setPortfolio, contact, setContact}) => {
    const [disp, setDisp] = useState("none")
    const [disp2, setDisp2] = useState("block")

    const toServices = () => {
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


    const nonethem =() => {
        setNavdis("none")

        if (disp == "block") {
            setDisp("none")
        }
        else {

        }
    }

  return (
    <div className='about' style={{display: aboutdi}} onClick={nonethem}>
        <div>
            <h1 className='textheader'>About Me</h1>
            <div className='flex1' style={{backgroundColor: theme}}></div>
            <div className='flex2' style={{backgroundColor: theme}}></div>
        </div>
        <div>
            <h3 className='headsumn'>I'm Abdulazeez,  <span style={{color: theme}}>A Software Developer </span></h3>
            <p className='paragr'>My career in software development started in high school, learning the basics of front end development. I'm a bit of a digital technology junky. Specialised in the <span style={{color: theme}}>MERN</span> full stack. </p><br />
            <p className='paragr'> Currently studying Architecture at Obafemi Awolowo University. Technology has the potential to solve 80% of world problems, My <span style={{color: theme}}>goal</span> has always been to be a large part of that solution someday. </p><br />
            <p className='paragr'> seeking suitable developer roles to utilize my skills catering to the needs of the company. I wish to work with a diverse team that works towards contributing to the company <span style={{color: theme}}>vision</span> and <span style={{color: theme}}>goals</span>.</p>
        </div><br/><br/>
        <div>
            <div>
                <div>
                    <h5 className='headd'>Birthday: <span className='spanx'> 23rd of March</span></h5> 
                    <div className='line'></div>
                </div>
                <div>
                    <h5  className='headd'>Website: <span className='spanx'> www.razaell.ga</span></h5>
                    <div className='line'></div>
                </div>
                <div>
                    <h5 className='headd'>Favourite Language: <span className='spanx'> React Js</span></h5>
                    <div className='line'></div>
                </div>
                <div>
                    <h5 className='headd'>Hobby: <span className='spanx'>De Bugging</span></h5>
                    <div className='line'></div>
                </div>
                <div>
                    <h5 className='headd'>Favourite Color: <span className='spanx'>Teal</span></h5>
                    <div className='line'></div>
                </div>
            </div>
            <button className='btn2' style={{borderColor: theme}} onClick={toServices}>Services</button>
            <div></div>
        </div>
        <Settings style={{color: "white",float:" right",padding: "30px",display: disp2, color: "white", position: "fixed", bottom: "0" }} onClick={() => {setDisp(disp == "none" ? "block" : "none")}}/>
            <div className='theme' style={{display: disp}}>
                <center>
                </center>
                <p style={{fontWeight: "bolder", fontSize: "large"}}>Theme Colors</p>
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

export default About