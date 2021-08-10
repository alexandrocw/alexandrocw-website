import React from "react";
import "./style.css";

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* Header */}
                <section id="header">
                <div classname="header container">
                    <div classname="nav-bar">
                    <div classname="brand">
                        <a href="#hero"><h1><span>A</span>lexandro <span>C</span>. <span>W</span>.</h1></a>
                    </div>
                    <div classname="nav-list">
                        <div classname="hamburger"><div classname="bar" /></div>
                        <ul>
                        <li><a href="#hero" data-after="Home">Home</a></li>
                        <li><a href="#services" data-after="Services">Services</a></li>
                        <li><a href="#projects" data-after="Projects">Projects</a></li>
                        <li><a href="#about" data-after="About">About</a></li>
                        <li><a href="#contact" data-after="Contact">Contact</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </section>
                {'{'}/* End Header */{'}'}
                {/* Hero Section */}
                <section id="hero">
                <div classname="hero container">
                    <div>
                    <h1>Hello,<span /></h1>
                    <h1>My Name is<span /></h1>
                    <h1>Alex<span /></h1>
                    <a href="#projects" type="button" classname="cta">Portfolio</a>
                    </div>
                </div>
                </section>
                {/* Hero Section */}
                {/* Services Section */}
                <section id="services">
                <div classname="services container">
                    <div classname="service-top">
                    <h1 classname="section-title">Serv<span>i</span>ces</h1>
                    <p>I offer several services that you would benefit from me.</p>
                    </div>
                    <div classname="service-bottom">
                    <div classname="service-item">
                        <div classname="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                        </div>
                        <h2>Front-End Web Development</h2>
                        <p>I'm capable of using HTML5, CSS, Javascript, ReactJS, and SASS to realize your design.</p>
                    </div>
                    <div classname="service-item">
                        <div classname="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                        </div>
                        <h2>Back-End Web Development</h2>
                        <p>I can make your back-end or improve it with Django or ExpressJS</p>
                    </div>
                    <div classname="service-item">
                        <div classname="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                        </div>
                        <h2>Data Science</h2>
                        <p>From collecting data, data preprocessing, data training, modelling, and testing&amp;evaluation. I can give you those services.</p>
                    </div>
                    <div classname="service-item">
                        <div classname="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" />
                        </div>
                        <h2>Data Analytic</h2>
                        <p>I can scrape data from Google Analytics and other website for analyzing trends and etc.</p>
                    </div>
                    </div>
                </div>
                </section>
                {/* End Services Section */}
                {/* Projects Section */}
                <section id="projects">
                <div classname="projects container">
                    <div classname="projects-header">
                    <h1 classname="section-title">Recent <span>Projects</span></h1>
                    <p>This section is in build...</p>
                    </div>
                    <div classname="all-projects">
                    <div classname="project-item">
                        <div classname="project-info">
                        <h1>BackEnd Projects</h1>
                        <h2>Nodejs, Expressjs, Django</h2>
                        <p>I have several backend projects made with Nodejs and Django with Database integration that can be seen in my github</p>
                        <a href="https://github.com/alexandrocw/" target="_blank">Here</a>
                        </div>
                        <div classname="project-img">
                        <img src="../../assets/img-1.png" alt="img" />
                        </div>
                    </div>
                    <div classname="project-item">
                        <div classname="project-info">
                        <h1>React Node Fullstack App</h1>
                        <h2>React, Javascript, Nodejs</h2>
                        <p>A fullstack App created using Express BackEnd and ReactJS Frontend (Still in progress). Deployed on Heroku</p>
                        <a href="https://alex-website-playground.herokuapp.com/" target="_blank">Here</a>
                        </div>
                        <div classname="project-img">
                        <img src="../../assets/img-1.png" alt="img" />
                        </div>
                    </div>
                    <div classname="project-item">
                        <div classname="project-info">
                        <h1>Front End Projects</h1>
                        <h2>Javascript, Reactjs, D3</h2>
                        <p>A collection of my other projects. Build with Reactjs, D3, and Javascript.</p>
                        <a href="https://codepen.io/lkingdgl/pens/public" target="_blank">Here</a>
                        </div>
                        <div classname="project-img">
                        <img src="../../assets/img-1.png" alt="img" />
                        </div>
                    </div>
                    <div classname="project-item">
                        <div classname="project-info">
                        <h1>Data Science and Machine Learning Projects</h1>
                        <h2>Machine learning, clustering, classNameification, regression</h2>
                        <p>A collection of my machine learning projects.</p>
                        <a href="https://www.kaggle.com/alexandrocw" target="_blank">Here</a>
                        </div>
                        <div classname="project-img">
                        <img src="../../assets/img-1.png" alt="img" />
                        </div>
                    </div>
                    <div classname="project-item">
                        <div classname="project-info">
                        <h1>Competitive Programming</h1>
                        <h2>C++, Data Structure &amp; Algorithm</h2>
                        <p>A collection of my competitive programming projects.</p>
                        <a href="https://github.com/alexandrocw/CP-training" target="_blank">Here</a>
                        </div>
                        <div classname="project-img">
                        <img src="../../assets/img-1.png" alt="img" />
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* End Projects Section */}
                {/* About Section */}
                <section id="about">
                <div classname="about container">
                    <div classname="col-left">
                    <div classname="about-img">
                        <img src="../../assets/Self_Potrait.png" alt="Alex" />
                    </div>
                    </div>
                    <div classname="col-right">
                    <h1 classname="section-title">About <span>Me</span></h1>
                    <h2>Full Stack Web Developer</h2>
                    <p>I'm an Electrical Engineering Undergraduate Student. I have big enthusiast towards technology, web development, and data science. I'm very easy going and can be contacted easily. Honesty and high-self esteem are my principles. </p>
                    <a href="../../assets/files/CV_Alexandro Christian Wijaya.pdf" download classname="cta">Download Resume</a>
                    </div>
                </div>
                </section>
                {/* End About Section */}
                {/* Contact Section */}
                <section id="contact">
                <div classname="contact container">
                    <div>
                    <h1 classname="section-title">Contact <span>Info</span></h1>
                    </div>
                    <div classname="contact-items">
                    <div classname="contact-item">
                        <div classname="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
                        <div classname="contact-info">
                        <h1>Phone</h1>
                        <h2>+62 8232 587 4231</h2>
                        </div>
                    </div>
                    <div classname="contact-item">
                        <div classname="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
                        <div classname="contact-info">
                        <h1>Email</h1>
                        <h2>alexandrowijaya.aw2@gmail.com</h2>
                        </div>
                    </div>
                    <div classname="contact-item">
                        <div classname="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
                        <div classname="contact-info">
                        <h1>Address</h1>
                        <h2>Temanggung, Jawa Tengah, Indonesia</h2>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* End Contact Section */}
                {/* Footer */}
                <section id="footer">
                <div classname="footer container">
                    <div classname="brand"><h1><span>A</span>lexandro <span>C</span>.<span>W</span>.</h1></div>
                    <h2>Your Complete Web Solution</h2>
                    <div classname="social-icon">
                    <div classname="social-item">
                        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="facebook" /></a>
                    </div>
                    <div classname="social-item">
                        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="instagram" /></a>
                    </div>
                    <div classname="social-item">
                        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/twitter.png" alt="twitter" /></a>
                    </div>
                    </div>
                    <p>Copyright © 2021 Alex. All rights reserved</p>
                </div>
                </section>
                {/* End Footer */}
            </div>
        )
    }
}

export default Home;