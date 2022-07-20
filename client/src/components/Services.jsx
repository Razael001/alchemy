import { Settings } from '@material-ui/icons'
import React, { useState } from 'react'

const Services = ({ navdis, setNavdis, theme, setTheme, servdi, setInfodi, setAboutdi, setServdi, setContdi, setPortdi }) => {
    const [disp, setDisp] = useState("none")
    const [disp2, setDisp2] = useState("block")

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
        <div className='about' style={{ display: servdi }} onClick={nonethem}>
            <div className='offer'>
                <p>What i offer</p>
                <h2 style={{ color: theme }}> Services </h2>
            </div>
            <div className='overallservices'>
                <div className='indservices' style={{ borderColor: theme }}>
                    <div className='firstfieldset' style={{ backgroundColor: theme }}>
                        <center>
                            <h3>FrontEnd Web Development</h3>
                        </center>
                    </div>
                    <ul className='servicelists'>
                        <li>Website Development using React Js</li>
                        <li>Cross Platform Mobile App Development using React Native</li>
                        <li>Can use Vanilla javascript, Html and Css for websites</li>
                        <li>Can do Wordpress Development</li>
                        <li>All devices Responsive Web design Layout</li>
                    </ul>
                </div>
                <div className='indservices' style={{ borderColor: theme }}>
                    <div className='firstfieldset' style={{ backgroundColor: theme }}>
                        <center>
                            <h3>Cross-platform Mobile Application</h3>
                        </center>                    </div>
                    <ul className='servicelists'>
                        <li>Cross Platform Mobile Application Development using React Native</li>
                        <li>Over 1+ year experience with react Native</li>
                    </ul>
                </div>
                <div className='indservices' style={{ borderColor: theme }}>
                    <div className='firstfieldset' style={{ backgroundColor: theme }}>
                        <center>
                            <h3>Backend Services</h3>
                        </center>                    </div>
                    <ul className='servicelists'>
                        <li>Pro mern stack developer</li>
                        <li>Have experience with Google Cloud, Aws amplify and GraphQl Api</li>
                        <li>Have a beginner experience with Django for backend web development</li>
                    </ul>
                </div>
            </div>

            <Settings style={{ color: "white", float: "right", padding: "10px", display: disp2, color: "white", position: "fixed", bottom: "0" }} onClick={() => { setDisp(disp == "none" ? "block" : "none") }} />
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

export default Services