import { Instagram, Mail, Map, Phone, Settings, Web, WhatsApp } from '@material-ui/icons'
import React, { useState } from 'react'

const Contact = ({ theme, setTheme, contdi, setInfodi, setAboutdi, setServdi, setContdi, setPortdi}) => {
    const [disp, setDisp] = useState("none")
    const [disp2, setDisp2] = useState("block")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    async function sendMessage(){
        const response = await fetch("http://razaell.herokuapp.com/api/sendmessage", {
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
        if (data.sent){
            alert(name + " Your Message Was Sent Succesfuly")
        }
        else {
            alert("retry sending")
        }
    }

    return (
        <div className='about' style={{display: contdi}}>
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
                        <h6>@razael100</h6>
                    </center>
                </div>
                <div className='classess'>
                    <center>
                        <Mail style={{ color: theme }} /><br /><br />
                        <h4>Email</h4><br />
                        <h6>abdulazeezusman017@gmail.com</h6>
                    </center>
                </div>
                <div className='classess'>
                    <center>
                        <Web style={{ color: theme }} /><br /><br />
                        <h4>Website</h4><br />
                        <h6>www.razaell.ga</h6>
                    </center>
                </div>
            </div>
            <center>
                <br /><br/>
                <h5 style={{ color: theme }}>SEND ME A MESSAGE</h5><br />
            </center>
            <div className='sha'>
                <input className='sinput' placeholder='Name' onChange={(e) => {setName(e.target.value)}}/>
                <input className='sinput' placeholder='Email'onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <center>
            <input className='tinput' placeholder='Message' onChange={(e) => {setMessage(e.target.value)}}/>
            </center>
            <button className='btn2' style={{borderColor: theme,marginLeft: "30px"}} onClick={sendMessage}>Send Message</button>
            <Settings style={{color: "white",float:" right",padding: "30px",display: disp2, color: "white"}} onClick={() => {setDisp(disp == "none" ? "block" : "none")}}/>
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

export default Contact