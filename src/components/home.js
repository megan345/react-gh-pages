import React, { Component } from 'react';
import styled from 'styled-components';
import About from './aboutme';
import jquery from 'jquery';

class Home extends Component {
    render(){
        return(
        <div>
                <div className="intro">
                        <div className="banner-text">
                            <h1>Hi, I'm <span>Megan Loureiro-Rickman</span></h1>
                            <h1>JavaScript/ ReactJs Developer</h1>
                            <h1>Looking for a Junior role in London</h1>

                        {/* hr */}                            
                        </div>
                    <div className="banner-box">

                        <div className="nav">
                            <ul className="navbar">
                                <li>Home</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </div>
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
    </div>



        )
    }
}

export default Home;