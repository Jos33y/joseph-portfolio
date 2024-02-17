import React, { useRef } from "react";
import { Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

import HeroImage from "../assets/casual-life-3d-young-man-sitting-in-front-of-laptop.png";
import { toast } from "react-toastify";

const MainBar = () => {
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await emailjs
            .sendForm(
                "service_zs0rdbz",
                "template_z0n1svx",
                form.current,
                "T_n4Xk159ZUu1YKU2"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            )
            .then(() => {
                toast.success("Message Sent Successfully");
            });
        e.target.reset();
    };

    return (
        <>
            <div className="MainBar">
                <div className="hero-section">
                    <Row>
                        <Col lg={7}>
                            <div className="hero-text">
                                <h3>Discover my Amazing Programming Space! </h3>
                                <div className="code-section">
                                    <code> I build iOS & Android applications. </code>
                                    <br />
                                    <code> I build Full Stack Web3/Blockchain apps.</code> <br />
                                    <code> I build portfolio websites for diverse brands.</code>
                                    <br />
                                    <code>
                                        I build Dynamic, secure web apps across platforms.
                                    </code>
                                    <br />
                                    <code>
                                        I build custom ecommerce websites for all services.
                                    </code>
                                </div>

                                <div className="hire-button">
                                    <a href="#contact" className="btn btn-md btn-success">
                                        Hire ME
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="hero-image">
                                <img src={HeroImage} alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="work-experience">
                    <div className="experience">
                        <h5>05+</h5>
                        <p>Years of Experience</p>
                    </div>

                    <div className="experience">
                        <h5>45</h5>
                        <p>Completed Projects</p>
                    </div>

                    <div className="experience">
                        <h5>27</h5>
                        <p>Happy Customers</p>
                    </div>

                    <div className="experience">
                        <h5>03+</h5>
                        <p>Certificates</p>
                    </div>
                </div>

                <div className="service-section">
                    <h4>My Services</h4>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="service-box">
                                <h6> Front-end Design and Development </h6>
                                <p>
                                    I'll conduct in-depth user audience analysis to understand
                                    their needs and translate these insights into UI design. Once
                                    the look and feel of the web app is agreed upon with
                                    stakeholders, I'll bring it to life with meticulous front-end
                                    coding.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="service-box">
                                <h6> Back-end Development </h6>
                                <p>
                                    I'll precisely implement the business logic of your web app on
                                    the back end. Leveraging proven frameworks, I ensure swift and
                                    high-quality coding to meet your project requirements.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="service-box">
                                <h6>API Integration </h6>
                                <p>
                                    I specialize in setting up APIs to seamlessly integrate your
                                    web app with corporate or third-party systems and services.
                                    This integration ensures immediate data synchronization across
                                    various platforms, enhancing the efficiency and functionality
                                    of your application.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="service-box">
                                <h6>Full Stack Development Solutions </h6>
                                <p>
                                    From front-end design to back-end development, I provide
                                    comprehensive Full Stack solutions tailored to your specific
                                    project needs. With expertise in Web3 & Blockchain
                                    technologies, React Native, React JS, and PHP, I ensure your
                                    web applications are robust, scalable, and user-friendly.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="service-box">
                                <h6>Blockchain Development Services</h6>
                                <p>
                                    I offer expertise in Web3 & Blockchain development, including
                                    smart contract development, Ethereum blockchain integration,
                                    and Web3.js implementation. Whether you're looking to build
                                    decentralized applications or integrate blockchain technology
                                    into your existing systems, I provide customized solutions to
                                    meet your requirements.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="service-box">
                                <h6> React Native & React JS Development </h6>
                                <p>
                                    Specializing in React Native and React JS, I develop
                                    cross-platform mobile applications and dynamic web interfaces.
                                    Utilizing the latest tools and best practices, I ensure your
                                    applications are responsive, scalable, and optimized for
                                    performance across various devices and platforms.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="service-box">
                                <h6>Customized Web Application Development </h6>
                                <p>
                                    I offer tailored web application development services to meet
                                    your unique business needs. Whether you require a custom CRM
                                    system, a booking platform, or an e-commerce solution, I'll
                                    work closely with you to understand your requirements and
                                    deliver a bespoke solution that exceeds your expectations.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="service-box">
                                <h6> Innovative Technology Solutions </h6>
                                <p>
                                    I'm open to exploring innovative technology solutions to
                                    address your specific challenges and drive your business
                                    forward. Whether it's integrating cutting-edge technologies
                                    like AI or IoT into your existing systems or exploring new
                                    possibilities with emerging technologies, I'm here to
                                    collaborate with you and bring your ideas to life. Contact me
                                    to discuss how we can leverage the latest advancements to
                                    achieve your goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="work-section">
                    <h4>Education</h4>
                    <Row>
                        <Col lg={6}>
                            <div className="work-box education">
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
                                    <p>
                                        Dealing with the theoretical knowledge and skills in the
                                        field of computer science and its applications in the real
                                        world for various uses
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="work-section">
                    <h4>Work History</h4>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="work-box">
                                <div className="work-box-wrapper">
                                    <div className="work-header">
                                        <div className="work-title">
                                            <h5>Senior Web Developer </h5>
                                            <p>Citizen Participation Institute </p>
                                        </div>
                                        <div className="work-time">
                                            <h6>Mar 2020 - Nov 2021</h6>
                                        </div>
                                    </div>

                                    <div className="work-description">
                                        <p>
                                            In my role, I focused on ensuring the security and privacy
                                            of user data within our web-based software. I also play a
                                            key part in developing and maintaining our applications,
                                            contributing to the organization's goal of engaging citizens
                                            effectively. This involves writing code to facilitate smooth
                                            interaction between different parts of our systems, as well
                                            as leading website maintenance to ensure a seamless user
                                            experience.
                                        </p>
                                        <p>
                                            Additionally, I'm responsible for implementing communication
                                            channels that allow users to provide feedback easily. I
                                            manage the setup and maintenance of our web infrastructure
                                            on Azure Cloud Servers, optimizing performance and
                                            reliability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="work-box">
                                <div className="work-box-wrapper">
                                    <div className="work-header">
                                        <div className="work-title">
                                            <h5>Fullstack Developer </h5>
                                            <p>MyQRKard </p>
                                        </div>
                                        <div className="work-time">
                                            <h6>Aug 2021 - Jan 2022</h6>
                                        </div>
                                    </div>

                                    <div className="work-description">
                                        <p>
                                            As a Full Stack Developer at MyQRKard, I championed the
                                            AGILE methodology within our cross-functional team.
                                            Leveraging React JS, I crafted a dynamic single-page
                                            application, seamlessly binding data and synchronizing it
                                            with the server. Bootstrap's responsive utilities ensured
                                            optimal design across devices. My pivotal achievements
                                            include developing a virtual business card platform and
                                            revolutionizing client interactions for businesses. This
                                            experience underscores my commitment to impactful,
                                            technology-driven solutions for MyQRKard.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="work-box">
                                <div className="work-box-wrapper">
                                    <div className="work-header">
                                        <div className="work-title">
                                            <h5>Fullstack Developer </h5>
                                            <p>Storetract </p>
                                        </div>
                                        <div className="work-time">
                                            <h6>Jan 2022 - Feb 2023</h6>
                                        </div>
                                    </div>

                                    <div className="work-description">
                                        <p>
                                            As a Full-Stack Developer at StoreTract, I orchestrated
                                            seamless app integrations with REST and various APIs,
                                            including Google Maps, social media logins, and payment
                                            processors. Using React.js, I meticulously designed multiple
                                            pages with distinct functions, employing React-Router for
                                            smooth navigation between pages, such as the Product List
                                            and Product Details pages. This user-friendly flow enhances
                                            the overall shopping experience.
                                        </p>
                                        <p>
                                            A notable accomplishment was the development of a fully
                                            functional online store provider. This innovative solution
                                            empowers small businesses to create and manage their online
                                            stores effortlessly, even without technical skills. This
                                            project reflects my dedication to enabling businesses, akin
                                            to providing a simplified, mini Shopify experience for
                                            StoreTract users.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="work-box">
                                <div className="work-box-wrapper">
                                    <div className="work-header">
                                        <div className="work-title">
                                            <h5>Fullstack Developer </h5>
                                            <p>HairbyTimaBlaq </p>
                                        </div>
                                        <div className="work-time">
                                            <h6>Feb 2023 - Apr 2023</h6>
                                        </div>
                                    </div>
                                    <div className="work-description">
                                        <p>
                                            As the Sole Programmer behind HairByTimaBlaq's luxury hair
                                            e-commerce site, I utilized Firebase instead of MongoDB for
                                            a secure and stylish shopping experience. I integrated APIs
                                            for smooth payments, ensuring scalability with React.js,
                                            Node.js, and Express.js. From user accounts to checkout, I
                                            independently crafted a secure and visually appealing online
                                            space. Using Axios and Co, I ensured continuous improvement.
                                            The site is hosted on Vercel for a seamless experience,
                                            showcasing my dedication to enhancing HairByTimaBlaq's
                                            luxury brand single-handedly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="work-box">
                                <div className="work-box-wrapper">
                                    <div className="work-header">
                                        <div className="work-title">
                                            <h5>Fullstack Developer </h5>
                                            <p>Blacktribe Fashion </p>
                                        </div>
                                        <div className="work-time">
                                            <h6>May 2023 - Jun 2023</h6>
                                        </div>
                                    </div>

                                    <div className="work-description">
                                        <p>
                                            As a Full-Stack Developer at BlackTribe Fashion, I
                                            spearheaded the development of our MERN Stack e-commerce
                                            platform. I integrated APIs for seamless processes, designed
                                            user-friendly interfaces with React.js, and optimized
                                            backend functionality using Node.js and Express.js. My
                                            contributions extended to database management, ensuring
                                            scalability and performance. The implementation of key
                                            e-commerce features, collaboration with cross-functional
                                            teams, and continuous improvement efforts reflected my
                                            commitment to delivering a secure, responsive, and engaging
                                            online shopping experience for BlackTribe Fashion customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-section">
                    <h4>Contact Information</h4>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="contact-box">
                                <div className="address-one">
                                    <p>State: </p>
                                    <p>Country: </p>
                                    <p>Timezone </p>
                                </div>
                                <div className="address-two main-address">
                                    <p>Lagos </p>
                                    <p>Nigeria </p>
                                    <p>GMT+1 (WAT) </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="contact-box">
                                <div className="address-one">
                                    <p>email: </p>
                                    <p>github: </p>
                                    <p>instagram: </p>
                                </div>
                                <div className="address-two">
                                    <p>hello@thebrickdev.com </p>
                                    <p>github.com/Jos33y </p>
                                    <p>@the_brickdev </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="contact-box">
                                <div className="address-one">
                                    <p>call: </p>
                                    <p>whatsapp: </p>
                                    <p>business: </p>
                                </div>
                                <div className="address-two">
                                    <p> +2348162438553 </p>
                                    <p> +2348162438553 </p>
                                    <p> +2348162438553 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-section" id="contact">
                    <h4>Get in touch</h4>

                    <div className="form-box">
                        <Form ref={form} className="form-body" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="fas fa-user"></i>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="form-control"
                                    required={true}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <i className="fas fa-at"></i>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    required={true}
                                />
                            </div>

                            <div className="form-group textarea">
                                <label htmlFor="message">
                                    <i className="fas fa-envelope"></i>
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="6"
                                    className="form-control"
                                    placeholder="Message"
                                    required={true}
                                ></textarea>
                            </div>

                            <div className="form-button">
                                <button type="submit" className="btn btn-md btn-success">
                                    send message
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>

                <div className="footer-section">
                    <div className="footer-box">
                        <p>&copy; 2024 The Brick Dev</p>
                        <p>
                            Illustration by
                            <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
                                Icons 8
                            </a>
                            from <a href="https://icons8.com/illustrations">Ouch!</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MainBar;
