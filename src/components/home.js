import React, { Component } from 'react';
import NavBar from './navbar';

class Home extends Component {
    render(){
        return(
            <div>
                <div class="section">
                    <NavBar />
                        <div className="intro">
                                    <div className="banner-text">
                                        <h1><span className="hi">Hi, </span> I'm <span className="megan">Megan Loureiro-Rickman</span></h1>
                                        <h1>JavaScript/ ReactJS Developer</h1>
                                        {/* hr */}                            
                                    </div>
                            </div>
                        <div className="pink-banner">
                        </div>
                    </div>
            </div>
    
        )
    }
}

export default Home;