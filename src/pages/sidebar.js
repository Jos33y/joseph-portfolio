import React from "react";
import "./styles/style.css";
import "./styles/css-circular-prog-bar.css";
import ProfileImage from "../assets/joe-profile.jpeg"

const SideBar = () => {
    return (
        <>
           <div className="Sidebar">
               <div className="header-section">
                   <div className="image-box">
                       <img src={ProfileImage} alt="" className="img-fluid"/>
                   </div>
                   <div className="Profile-info">
                       <h5>Joseph Lagbalu</h5>
                       <p>Software Engineer</p>
                       <p>Web Developer</p>
                   </div>
               </div>

               <div className="Profile-details">
                   <div className="profile-address">
                       <div className="address-one">
                           <h6>Residence:</h6>
                           <h6>City:</h6>
                           <h6>Age:</h6>
                       </div>
                       <div className="address-two">
                           <h6>Egan</h6>
                           <h6>Lagos</h6>
                           <h6>24</h6>
                       </div>
                   </div>
                   <hr/>
                   <div className="language">
                       <div className="language-status">
                           <div className="progress-circle over50 p90">
                               <span>90%</span>
                               <div className="left-half-clipper">
                                   <div className="first50-bar"></div>
                                   <div className="value-bar"></div>
                               </div>
                           </div>
                           <p>Yoruba</p>
                       </div>

                       <div className="language-status">
                           <div className="progress-circle over50 p100">
                               <span>100%</span>
                               <div className="left-half-clipper">
                                   <div className="first50-bar"></div>
                                   <div className="value-bar"></div>
                               </div>
                           </div>
                           <p>English</p>
                       </div>

                   </div>

                   <hr/>

                   <div className="skills">
                       <ul>
                           <li>
                               <div className="skills-text">
                                   <p>html</p>
                                   <p className="percent">90%</p>
                               </div>
                               <div className="skill-bar">
                                   <div className="skill html"></div>
                               </div>
                           </li>
                           <li>
                               <div className="skills-text">
                                   <p>CSS</p>
                                   <p className="percent">90%</p>
                               </div>
                               <div className="skill-bar">
                                   <div className="skill css"></div>
                               </div>
                           </li>
                           <li>
                               <div className="skills-text">
                                   <p>Js</p>
                                   <p className="percent">90%</p>
                               </div>
                               <div className="skill-bar">
                                   <div className="skill html"></div>
                               </div>
                           </li>
                           <li>
                               <div className="skills-text">
                                   <p>React Js</p>
                                   <p className="percent">90%</p>
                               </div>
                               <div className="skill-bar">
                                   <div className="skill html"></div>
                               </div>
                           </li>

                           <li>
                               <div className="skills-text">
                                   <p>Node Js</p>
                                   <p className="percent">90%</p>
                               </div>
                               <div className="skill-bar">
                                   <div className="skill html"></div>
                               </div>
                           </li>
                           <li>
                               <div className="skills-text">
                                   <p>Firebase</p>
                                   <p className="percent">90%</p>
                               </div>
                               <div className="skill-bar">
                                   <div className="skill html"></div>
                               </div>
                           </li>
                           <li>
                               <div className="skills-text">
                                   <p>Azure </p>
                                   <p className="percent">50%</p>
                               </div>
                               <div className="skill-bar">
                                   <div className="skill js"></div>
                               </div>
                           </li>
                           <li>
                               <div className="skills-text">
                                   <p>PHP</p>
                                   <p className="percent">80%</p>
                               </div>
                               <div className="skill-bar">
                                   <div className="skill php"></div>
                               </div>
                           </li>
                           <li>
                               <div className="skills-text">
                                   <p>Open to other technologies</p>
                                   <p className="percent">100%</p>
                               </div>
                               <div className="skill-bar">
                                   <div className="skill other"></div>
                               </div>
                           </li>
                       </ul>
                   </div>

                   <hr/>

                   <div className="mini-skills">
                       <ul>
                           <li><i className="fas fa-check"></i> Boostrap, Materialize</li>
                           <li><i className="fas fa-check"></i> Node Js/ Express Js</li>
                           <li><i className="fas fa-check"></i> Firestore and Authentication</li>
                           <li><i className="fas fa-check"></i> PHPMyadmin and MySql</li>
                           <li><i className="fas fa-check"></i> GIT knowledge</li>
                       </ul>
                   </div>

                   <hr/>

                   <div className="download-cv">
                       <a href="Https://"> Download CV <i className="fas fa-download"></i></a>
                   </div>

               </div>

               <div className="side-footer">
                   <div className="socials">
                       <ul>
                           <li><a href="https://www.linkedin.com/in/joseph-lagbalu/"><i className="fab fa-linkedin-in"></i></a></li>
                           <li><a href="https://github.com/Jos33y"><i className="fab fa-github"></i></a></li>
                           <li><a href="https://web.facebook.com/lagbalu.joseph/"><i className="fab fa-facebook"></i></a></li>
                           <li><a href="https://www.linkedin.com/in/joseph-lagbalu/"><i className="fab fa-twitter"></i></a></li>
                       </ul>
                   </div>
               </div>
           </div>
        </>
    )
}
export default SideBar