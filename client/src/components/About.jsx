import { Settings } from '@material-ui/icons'
import React, { useState } from 'react'

const About = ({ theme, setTheme, aboutdi, setInfodi, setAboutdi, setServdi, setContdi, setPortdi,  home, setHome, about, setAbout, services, setServices, portfolio, setPortfolio, contact, setContact}) => {
    const [disp, setDisp] = useState("none")
    const [disp2, setDisp2] = useState("block")

    const toContact = () => {
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
    <div className='about' style={{display: aboutdi}}>
        <div>
            <h1 className='textheader'>About Me</h1>
            <div className='flex1' style={{backgroundColor: theme}}></div>
            <div className='flex2' style={{backgroundColor: theme}}></div>
        </div>
        <div>
            <h3 className='headsumn'>I'm Abdulazeez,  <span style={{color: theme}}>A Software Developer </span></h3>
            <p className='paragr'>My career in software development started in high school, learning the basics of front end development. I'm a bit of a digital technology junky. Specialised in the <span style={{color: theme}}>MERN</span> full stack. Currently studying Architecture at Obafemi Awolowo University. Technology has the potential to solve 80% of world problems, My goal has always been to be a large part of that solution someday</p>
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
            <button className='btn2' style={{borderColor: theme}} onClick={toContact}>Lets create magic</button>
            <div></div>
        </div>
        <Settings style={{color: "white",float:" right",padding: "30px",display: disp2, color: "white" }} onClick={() => {setDisp(disp == "none" ? "block" : "none")}}/>
            <div className='theme' style={{display: disp}}>
                <center>
                </center>
                <p style={{fontWeight: "bolder", fontSize: "large"}}>Theme Colors</p>
                <div className='colors'>
                    <div className='brown' onClick={() => {setTheme("brown")}}></div>
                    <div className='orange' onClick={() => {setTheme("orange")}}></div>
                    <div className='teal' onClick={() => {setTheme("teal")}}></div>
                    <div className='tan' onClick={() => {setTheme("tan")}}></div>
                    <div className='pink' onClick={() => {setTheme("pink")}}></div>
                </div>
            </div>

    </div>
  )
}

export default About