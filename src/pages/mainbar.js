import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import HeroImage from "../assets/casual-life-3d-young-man-sitting-in-front-of-laptop.png";

const MainBar = () => {

    const handleSubmit = async () => {
        console.log("hello");
    }

    return (
        <>
            <div className="MainBar">

                <div className="hero-section">
                    <Row>
                        <Col lg={7}>
                            <div className="hero-text">
                                <h3>Discover my Amazing Programming Space! </h3>
                                <div className="code-section">
                                    <code> I build automation tools</code> <br/>
                                    <code> I build ios and android applications. </code><br/>
                                    <code> I build full stack web applications</code>
                                </div>

                                <div className="hire-button">
                                    <button className="btn btn-md btn-success"> Hire ME</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="hero-image">
                                <img src={HeroImage} alt="" className="img-fluid"/>
                            </div>

                        </Col>
                    </Row>
                </div>

                <div className="work-experience">
                    <div className="experience">
                        <h5>04+</h5>
                        <p>Years of Experience</p>
                    </div>

                    <div className="experience">
                        <h5>87</h5>
                        <p>Completed Projects</p>
                    </div>

                    <div className="experience">
                        <h5>54</h5>
                        <p>Happy Customers</p>
                    </div>

                    <div className="experience">
                        <h5>03+</h5>
                        <p>Certificates</p>
                    </div>
                </div>



                <div className="service-section">
                    <h4>My Services</h4>

                    <Row>
                        <Col md={4}>
                            <div className="service-box">
                                <h6>Front-end design and development</h6>
                                <p>
                                    I will closely analyze the user audience to understand their needs and reflect these findings in UI design.
                                    Having agreed on the look and feel of a web app with project stakeholders, I will bring it to life with front-end coding.
                                </p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="service-box">
                                <h6>Back-end development</h6>
                                <p>
                                    I will accurately implement the business logic of your web app on the back end.
                                    I rely on proven frameworks to ensure fast and quality coding.
                                </p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="service-box">
                                <h6>Integration</h6>
                                <p>
                                    I set up APIs to integrate your web app with corporate or third-party systems and services.
                                    App integration ensures immediate data synchronization across systems.
                                </p>
                            </div>
                        </Col>


                    </Row>
                </div>

                <div className="work-section">
                    <h4>Education</h4>
                    <Row>
                        <Col md={6}>
                            <div className="work-box">
                                <div className="work-header">
                                    <div className="work-title">
                                        <h5>Bsc. Computer Science </h5>
                                        <p>Kwara State University </p>
                                    </div>
                                    <div className="work-time">
                                        <h6>aug 2016 - oct 2021</h6>
                                    </div>
                                </div>

                                <div className="work-description">
                                    <p>Dealing with the theoretical knowledge and skills in the field of computer science
                                        and its applications in the real world for various uses</p>
                                </div>
                            </div>
                        </Col>


                    </Row>
                </div>

                <div className="work-section">
                    <h4>Work History</h4>
                    <Row>
                        <Col md={6}>
                            <div className="work-box">
                                <div className="work-header">
                                    <div className="work-title">
                                        <h5>Senior Software Engineer </h5>
                                        <p>Citizen Participation Institute </p>
                                    </div>
                                    <div className="work-time">
                                        <h6>mar 2020 - nov 2021</h6>
                                    </div>
                                </div>

                                <div className="work-description">
                                    <p>Ensure applications security and ability to interact with multiple APIs and
                                        databases</p>
                                    <p> Responsible for performing maintenance and development of websites.</p>
                                    <p>Responsible for installing, configuring and maintaining PHP, Apache and
                                        MySQL on Azure Cloud Servers.</p>
                                    <p>Used SMTP mail class of PHP for the users to send mail with suggestions.
                                        Extensive use of PHP Mailer class</p>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="work-box">
                                <div className="work-header">
                                    <div className="work-title">
                                        <h5>Software Engineer </h5>
                                        <p>MyQRKard </p>
                                    </div>
                                    <div className="work-time">
                                        <h6>aug 2021 - jan 2022</h6>
                                    </div>
                                </div>

                                <div className="work-description">
                                    <p>Followed AGILE Methodology for the software development process, part
                                        of the cross-functional team for the application development</p>
                                    <p>Used React Js as a framework to create a Single Page Application (SPA)
                                        which can bind data to specific views and synchronize data with the server.</p>

                                    <p>Developed a fully function virtual business card platform that helps
                                        business leave a digital impression on their clients.</p>
                                </div>
                            </div>
                        </Col>


                        <Col md={6}>
                            <div className="work-box">
                                <div className="work-header">
                                    <div className="work-title">
                                        <h5>Software Engineer </h5>
                                        <p>Storetract </p>
                                    </div>
                                    <div className="work-time">
                                        <h6>jan 2022 - present</h6>
                                    </div>
                                </div>

                                <div className="work-description">
                                    <p>Developed app integration with REST and other APIs for Google Maps,
                                        social media logins, payment processors, and other services.</p>
                                    <p>Designed multiple pages with different functions using React.js and used
                                        React-Router to navigate these pages (Product list page, Product details
                                        page...) with user-friendly flow when switching.</p>
                                    <p>Developed a fully functional online store provider that allows you to create
                                        and mange your online store without technical skills.</p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>


                <div className="contact-section">
                    <h4>Contact Information</h4>
                    <Row>
                        <Col md={4}>
                            <div className="contact-box">
                                <div className="address-one">
                                    <p>country: </p>
                                    <p>city: </p>
                                    <p>Street: </p>
                                </div>
                                <div className="address-two">
                                    <p>Nigeria </p>
                                    <p>Lagos </p>
                                    <p>20a Iwalesin </p>
                                </div>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="contact-box">
                                <div className="address-one">
                                    <p>email: </p>
                                    <p>github: </p>
                                    <p>telegram: </p>
                                </div>
                                <div className="address-two">
                                    <p>josephlagbalu@outlook.com </p>
                                    <p>github.com/Jos33y </p>
                                    <p>@jos33y </p>
                                </div>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="contact-box">
                                <div className="address-one">
                                    <p>call: </p>
                                    <p>whatsapp: </p>
                                    <p>business: </p>
                                </div>
                                <div className="address-two">
                                    <p>+2347037344408 </p>
                                    <p>+2347037344408 </p>
                                    <p>+2347037344408 </p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>




                <div className="form-section">
                    <h4>Get in touch</h4>

                    <div className="form-box">
                        <Form className="form-body" onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="name"> <i className="fas fa-user"></i> </label>
                                <input type="text" placeholder="Full Name" className="form-control"  required={true}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"> <i className="fas fa-at"></i> </label>
                                <input type="email" placeholder="Email"  className="form-control" required={true}/>
                            </div>

                            <div className="form-group textarea">
                                <label htmlFor="message"> <i className="fas fa-envelope"></i></label>
                                <textarea name="message"
                                          id="message"
                                          cols="30"
                                          rows="6"
                                          className="form-control"
                                          placeholder="Message"
                                          required={true}></textarea>
                            </div>

                            <div className="form-button">
                                <button type="submit" className="btn btn-md btn-success"> send message</button>
                            </div>

                        </Form>
                    </div>
                </div>


                <div className="footer-section">
                    <div className="footer-box">
                        <p>&copy; Joseph Lagbalu</p>
                        <p>Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a> </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainBar