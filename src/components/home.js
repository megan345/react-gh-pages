import React, { Component } from 'react';
import About from './aboutme';
import jquery from 'jquery';
import Projects from './projects';
import Contact from './contact';

class Home extends Component {
    render(){
        return(
        <div id="home">
            <div className="nav">
                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#AboutMe">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="intro">
                        <div className="banner-text">
                            <h1>Hi, I'm <span>Megan Loureiro-Rickman</span></h1>
                            <h1>JavaScript/ ReactJS Developer</h1>
                            {/* hr */}                            
                        </div>
                </div>


            <div className="social-links">
                                
            {/*LinkedIn*/}
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square"
                aria-hidden="true" ></i>
            </a>
            {/*Github*/}
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square"
                aria-hidden="true" ></i>
            </a>
            {/*FreeCodeCamp*/}
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-free-code-camp"
                aria-hidden="true" ></i>
            </a>
            {/*Email*/}
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-envelope"
                aria-hidden="true" ></i>
            </a>
            {/*Phone*/}
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-phone"
                aria-hidden="true" ></i>
            </a>

        </div>

        <About/>
        <Projects/>
        <Contact/>
    </div>



        )
    }
}

export default Home;