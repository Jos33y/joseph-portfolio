import React from "react";
import "./styles/style.css"
import {Col, Row} from "react-bootstrap";
import SideBar from "./sidebar";
import MainBar from "./mainbar";
const HomePage = () => {
    return (
        <>
           <div className="Home">
               <div className="Bg">
                   <Row>
                       <Col md={3} className="side-home">
                           <SideBar />
                       </Col>
                       <Col md={9} className="main-home">
                           <MainBar />
                       </Col>
                   </Row>
               </div>

           </div>
        </>
    )
}
export default HomePage