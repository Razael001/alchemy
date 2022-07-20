import { Settings } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const Skills = ({skill, setSkill, skilldi, setSkilldi, navdis, setNavdis, theme, setTheme, servdi, setInfodi, setAboutdi, setServdi, setContdi, setPortdi}) => {
    const [disp, setDisp] = useState("none")
    const [disp2, setDisp2] = useState("block")

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

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
        <div className='about' style={{display: skilldi}} onClick={nonethem}>
            <div>
                <h1 className='textheader' style={{marginTop: "0"}}>Skills</h1>
                <div className='flex1' style={{ backgroundColor: theme }}></div>
                <div className='flex3' style={{ backgroundColor: theme }}></div>
            </div>
            <div>
                <h2 style={{ color: theme }}>Languages and frameworks</h2><br /><br />
                <div className='skills'>
                    <div className='killl' style={{width: "100%"}}>
                        <div>
                            <div className='item'>
                                <h5>React Js</h5>
                                <h5>92%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "92%", height: "100%" }}></div>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div>
                            <div className='item'>
                                <h5>CSS</h5>
                                <h5>70%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "70%", height: "100%" }}></div>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div>
                            <div className='item'>
                                <h5>Vanilla Js</h5>
                                <h5>85%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "85%", height: "100%" }}></div>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div>
                            <div className='item'>
                                <h5>Mongo DB</h5>
                                <h5>83%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "83%", height: "100%" }}></div>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div>
                            <div className='item'>
                                <h5>Express Js</h5>
                                <h5>70%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "70%", height: "100%" }}></div>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div>
                            <div className='item'>
                                <h5>Node Js</h5>
                                <h5>84%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "84%", height: "100%" }}></div>
                            </div>
                        </div>
                        <br /><br /><br />
                    </div>
                    <div style={{width: "100%"}}>
                        <div>
                            <div className='item'>
                                <h5>HTML</h5>
                                <h5>95%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "95%", height: "100%" }}></div>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div>
                            <div className='item'>
                                <h5>Next Js</h5>
                                <h5>75%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "75%", height: "100%" }}></div>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div>
                            <div className='item'>
                                <h5>Kotlin</h5>
                                <h5>60%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "60%", height: "100%" }}></div>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div>
                            <div className='item'>
                                <h5>Wordpress</h5>
                                <h5>65%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "65%", height: "100%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Skills