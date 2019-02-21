import React, { Component } from 'react';

class AboutMe extends Component {
    render(){
        return(
        <div>
            <div className="intro">
                    <div className="banner-text">
                        <p>About me</p>
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

        </div>
        )
    }
}

export default AboutMe;