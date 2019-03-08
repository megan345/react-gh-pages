import React, { Component } from 'react';
import portfolio from '../assets/portfolio-thumbnail.jpg';
import kodflix from '../assets/kodflix-thumbnail.jpg';
import daysaweek from '../assets/8daysaweek-thumbnail.jpg';
import Slider from './slider';

class Projects extends Component {
    render(){
        return(
        <div id="projects">
            <div className="projects">
                    <div className="banner-text">
                        <h1 style={{'color': 'black', 'text-decoration': 'underline'}}>
                            Projects
                        </h1>
                        <Slider />
                    {/* hr */}                            
                    </div>
                
            </div>
           
        </div>
        )
    }
}

export default Projects;