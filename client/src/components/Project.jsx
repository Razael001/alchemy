import { Close, OpenInBrowser } from '@material-ui/icons';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const Project = ({ proj, theme }) => {
    const [show, setShow] = useState(false);
    var [num, setNum] = useState(0);
    const handleClose = () => {
        setShow(false)
        proj.no = 0;
    };

    const handleShow = () => setShow(true);

    const nextpic = () => {
        if (proj.no < proj.img.length - 1) {
            proj.no++;
            setNum(Math.random());
        }
        else if (proj.no = proj.img.length - 1) {
            proj.no = 0;
            setNum(Math.random());
        }
        else {
            proj.no = 0;
            setNum(Math.random());
        }
    }
    return (
        <div>
            <div className="imgcalc" style={{ backgroundImage: `url(${proj.img[0]})` }}>
                <div className='hoverr'>
                    <center>
                        <button className='xxx' onClick={handleShow} style={{border: `1px solid ${theme}`, color: theme}}>Learn more</button>
                    </center>
                </div>
            </div>
            <div className='names' style={{ backgroundColor: theme }}>
                <h5 style={{ marginLeft: "7%" }}>{proj.name}</h5>
            </div>
            <Modal show={show} >
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title><h3>{proj.name}</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <div className="imgcalc2" style={{ backgroundImage: `url(${proj.img[proj.no]})` }} onClick={nextpic}>
                        </div>
                        <h4 className='okxi'>{proj.desc}</h4>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <OpenInBrowser style={{ color: theme }} onClick={() => { window.location = proj.link }} />
                    <Close style={{ color: theme }} onClick={handleClose} />
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Project