import { Instagram, LinkedIn, Mail, Map, OpenInBrowser, Phone, Settings, Web, WhatsApp } from '@material-ui/icons'
import React, { useState } from 'react'
import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Contact = ({ navdis, setNavdis, theme, setTheme, contdi, setInfodi, setAboutdi, setServdi, setContdi, setPortdi }) => {
    const [disp, setDisp] = useState("none")
    const [disp2, setDisp2] = useState("block")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    async function sendMessage() {
        const response = await fetch("https://razaell.herokuapp.com/api/sendmessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        })

        const data = await response.json();
        if (data.sent) {
            alert(name + " Your Message Was Sent Succesfuly")
        }
        else {
            alert("retry sending")
        }
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
    const nonethem = () => {
        setNavdis("none")

        if (disp == "block") {
            setDisp("none")
        }
        else {

        }
    }

    return (
        <div className='about' style={{ display: contdi }} onClick={nonethem}>
            <div>
                <h1 className='textheader'>Contact Me</h1>
                <div className='flex1' style={{ backgroundColor: theme }}></div>
                <div className='flex3' style={{ backgroundColor: theme }}></div>
            </div>
            <div>
                <center>
                    <h2 style={{ color: theme }}>Have You Any Questions ?</h2><br /><br />
                    <h5 className='servtext'>I'M AT YOUR SERVICE</h5>
                </center>
            </div>
            <div className='contactlist'>
                <div className='classess'>
                    <center>
                        <a href='https://wa.me/2349017579984'><WhatsApp style={{ color: theme }} /></a> <br /><br />
                        <h4>Whatsapp</h4><br />
                        <h6 className='classes'>+234 9017579984</h6>
                    </center>
                </div>
                <div className='classess'>
                    <center>
                        <Instagram style={{ color: theme }} /><br /><br />
                        <h4>Instagram</h4><br />
                        <h6 className='classes'>@razael100</h6>
                    </center>
                </div>
                <div className='classess'>
                    <center>
                        <a href='mailto:abdulazeezusman017@gmail.com'><Mail style={{ color: theme }} /></a><br /><br />
                        <h4>Email</h4><br />
                        <h6 className='classes'>abdulazeezusman017@gmail.com</h6>
                    </center>
                </div>
                <div className='classess'>
                    <center>
                        <a href='https://www.linkedin.com/in/abdulazeez-usman-912703244'> <LinkedIn style={{ color: theme }} /> </a><br /><br />
                        <h4>LinkedIn</h4><br />
                        <h6 className='classes'>Abdulazeez Usman</h6>
                    </center>
                </div>
            </div>
            <div className='phonestyle'>
                <center>
                    <a href='https://www.linkedin.com/in/abdulazeez-usman-912703244'  style={{ color: "grey" }}>
                        <div>
                            <div className='flexphone'>
                                <h6>LinkedIn</h6>
                                <FaLinkedin style={{ color: theme }} />
                            </div>
                        </div>
                    </a>
                    <a href='https://wa.me/2349017579984' style={{ color: "grey" }}><div>
                        <div className='flexphone'>
                            <h6>Whatsapp</h6>
                            <FaWhatsapp style={{ color: theme }} />
                        </div>
                    </div>
                    </a>
                    <div>
                        <div className='flexphone'>
                            <h6>Instagram</h6>
                            <FaInstagram style={{ color: theme }} />
                        </div>
                    </div>
                    <a href='mailto:abdulazeezusman017@gmail.com'  style={{ color: "grey" }}>
                        <div>
                            <div className='flexphone'>
                                <h6>abdulazeezusman017@gmail</h6>
                                <FaEnvelope style={{ color: theme }} />
                            </div>
                        </div>
                    </a>
                    <a href='https://razaell.ga' style={{ color: "grey" }}> <div>
                        <div className='flexphone'>
                            <h6>Website</h6>
                            <OpenInBrowser style={{ color: theme }} />
                        </div>
                    </div>
                    </a>
                </center>
            </div>
            <div className='floo'>
                <center>
                    <br /><br />
                    <h5 style={{ color: theme }}>SEND ME A MESSAGE</h5><br />
                </center>
                <div className='sha'>
                    <input className='sinput' placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
                    <input className='sinput' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <center>
                    <input className='tinput' placeholder='Message' onChange={(e) => { setMessage(e.target.value) }} />
                </center>
                <button className='btn2' style={{ borderColor: theme, marginLeft: "30px" }} onClick={sendMessage}>Send Message</button>
            </div>
            <Settings style={{ color: "white", float: " right", padding: "30px", display: disp2, color: "white", position: "fixed", bottom: "0" }} onClick={() => { setDisp(disp == "none" ? "block" : "none") }} />
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

export default Contact