import { Settings } from '@material-ui/icons'
import React, { useState } from 'react'

const Services = ({ theme, setTheme, servdi, setInfodi, setAboutdi, setServdi, setContdi, setPortdi}) => {
    const [disp, setDisp] = useState("none")
    const [disp2, setDisp2] = useState("block")

    return (
        <div className='about' style={{display: servdi}}>
            <div>
                <h1 className='textheader' style={{marginTop: "0"}}>Services</h1>
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
                                <h5>90%</h5>
                            </div>
                            <div className='ratings'>
                                <div className='spanitem' style={{ backgroundColor: theme, width: "90%", height: "100%" }}></div>
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
                    </div>
                </div>
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

export default Services