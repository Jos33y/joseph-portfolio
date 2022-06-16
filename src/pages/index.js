import React, {useState} from "react";
import "./styles/style.css"
import {Col, Row} from "react-bootstrap";
import SideBar from "./sidebar";
import MainBar from "./mainbar";
const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen= (e) => {
        e.preventDefault();
        e.stopPropagation();
        const note = document.querySelector('.Sidebar');
        note.style.display = 'block';
        setIsOpen(true)
    }

    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const note = document.querySelector('.Sidebar');
        note.style.display = 'none';
        setIsOpen(false)
    }

    return (
        <>
           <div className="Home">
               <div className="menu-section">
                   <div className="menu-box">

                       {isOpen ?
                           (<button className="btn btn-md btn-success" onClick={handleClose}> <i className="fas fa-bars"></i></button>)
                           :
                           (<button className="btn btn-md btn-success" onClick={handleOpen}> <i className="fas fa-bars"></i></button>)
                       }

                   </div>
               </div>
               <div className="Bg">
                   <Row>
                       <Col lg={3} className="side-home">
                           <SideBar />
                       </Col>
                       <Col lg={9} className="main-home">
                           <MainBar />
                       </Col>
                   </Row>
               </div>

           </div>
        </>
    )
}
export default HomePage