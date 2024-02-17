import React from "react";
import "./styles/style.css";
import "./styles/css-circular-prog-bar.css";
import ProfileImage from "../assets/brick_logo.png"

const SideBar = () => {
    return (
        <>
            <div className="Sidebar">
                <div className="header-section">
                    <div className="image-box">
                        <img src={ProfileImage} alt="The Brick Dev Logo" className="img-fluid" />
                    </div>
                    <div className="Profile-info">
                        <h5>Joseph Lagbalu</h5>
                        <h3>The Brick Dev</h3>
                        <p>Full Stack Dev | Web3 & Blockchain Dev | React Native, React Js & PHP Developer</p>
                    </div>
                </div>

                <div className="Profile-details">
                    <div className="profile-address">
                        <div className="address-one">
                            <h6>City:</h6>
                            <h6>Country:</h6>
                            <h6>Age:</h6>
                        </div>
                        <div className="address-two">
                            <h6>Lagos</h6>
                            <h6>Nigeria</h6>
                            <h6>25</h6>
                        </div>
                    </div>
                    <hr />
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

                    <hr />

                    <div className="skills">
                        <ul>
                            <li>
                                <div className="skills-text">
                                    <p>HTML</p>
                                    <p className="percent">90%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-90"></div>
                                </div>
                            </li>
                            <li>
                                <div className="skills-text">
                                    <p>CSS</p>
                                    <p className="percent">80%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-80"></div>
                                </div>
                            </li>
                            <li>
                                <div className="skills-text">
                                    <p>JavaScript</p>
                                    <p className="percent">80%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-80"></div>
                                </div>
                            </li>
                            <li>
                                <div className="skills-text">
                                    <p>React.js</p>
                                    <p className="percent">80%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-80"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>React Native</p>
                                    <p className="percent">80%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-80"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>PHP</p>
                                    <p className="percent">80%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-80"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Node.js</p>
                                    <p className="percent">70%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-70"></div>
                                </div>
                            </li>
                            <li>
                                <div className="skills-text">
                                    <p>Firebase</p>
                                    <p className="percent">80%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-80"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Canva</p>
                                    <p className="percent">70%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-70"></div>
                                </div>
                            </li>
                            <li>
                                <div className="skills-text">
                                    <p>Web3.js</p>
                                    <p className="percent">70%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-70"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Ether.js</p>
                                    <p className="percent">60%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-60"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Solidity</p>
                                    <p className="percent">50%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-50"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Smart Contract</p>
                                    <p className="percent">50%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-50"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Blockchain Integration</p>
                                    <p className="percent">70%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-70"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>API integration</p>
                                    <p className="percent">70%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-70"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Version control (Git)</p>
                                    <p className="percent">80%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-80"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Responsive Web Design</p>
                                    <p className="percent">90%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-90"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Database management</p>
                                    <p className="percent">80%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-80"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Deployment and hosting</p>
                                    <p className="percent">80%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-80"></div>
                                </div>
                            </li>

                            <li>
                                <div className="skills-text">
                                    <p>Open to other technologies</p>
                                    <p className="percent">100%</p>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill percent-100"></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <hr />

                    <div className="mini-skills">
                        <ul>
                            <li><i className="fas fa-check"></i> Boostrap, Materialize</li>
                            <li><i className="fas fa-check"></i> UI/UX design principles</li>
                            <li><i className="fas fa-check"></i> Node Js/ Express Js</li>
                            <li><i className="fas fa-check"></i> Firestore and Authentication</li>
                            <li><i className="fas fa-check"></i> PHPMyadmin and MySql</li>
                            <li><i className="fas fa-check"></i> GIT knowledge</li>
                            <li><i className="fas fa-check"></i> Ethereum blockchain development</li>
                        </ul>
                    </div>

                    <hr />

                    <div style={{ display: 'none' }} className="download-cv">
                        <a href="https://www.keepandshare.com/doc27/113219/resume-joseph-lagbalu-pdf-102k?da=y"
                            target="_blank"
                            rel="noreferrer noopener"
                            download> Download CV <i className="fas fa-download"></i></a>
                    </div>

                    <div className="download-cv">
                        <a href="https://www.upwork.com/freelancers/~01fc04df6c73d0b430"
                            target="_blank"
                            rel="noreferrer noopener"> Verified Upwork Profile <i className="fas fa-circle-check"></i></a>
                    </div>

                    <div className="side-footer">
                        <div className="socials">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/joseph-lagbalu/"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://github.com/Jos33y"><i className="fab fa-github"></i></a></li>
                                <li><a href="https://www.instagram.com/the_brickdev/"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://x.com/boy__programmer"><i className="fab fa-x-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default SideBar