import React, { useState } from 'react'
import { Projects } from './Data'
import { Modal } from 'react-bootstrap'
import { ArrowBackIos, ArrowForwardIos, Close, OpenInBrowser } from '@material-ui/icons';
import Project from './Project';
import { Projectz } from './Data2';


const Portfolio = ({ theme, setTheme, portdi, setInfodi, setAboutdi, setServdi, setContdi, setPortdi }) => {

    return (
        <div className='aboutp' style={{ display: portdi }}>
            <div className='portef'>
                <h1 className='textheader'> Portfolio</h1>
                <div className='flex1' style={{ backgroundColor: theme }}></div>
                <div className='flex3' style={{ backgroundColor: theme }}></div>
            </div>
            <div className='overproj' style={{ display: "block" }}>
                <div className='okay'>
                    {Projects.map((proj) => {
                        return (
                          <Project proj={proj} theme={theme} key={Math.random()}/>
                        )
                    })}
                </div>
                <div className='okay'>
                    {Projectz.map((proj) => {

                        return (
                          <Project proj={proj} theme={theme} key={Math.random()}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio