import React, { Component } from 'react';
import me from '../assets/me.jpg';

class AboutMe extends Component {
    render(){
        return(
        <div>
            <div className="aboutme">
                    <div className="about">
                        <div className="aboutImage">
                            <img className="me" src={me}></img>
                        </div>
                        <p>After completing Kodiri - a full time coding
                        intensive programme where we learned to create
                        responsive Web Apps using JS and ReactJS.
                        I am looking for a Junior JavaScript/ ReactJS 
                        position in London. My background includes a 
                        BSc degree in Genetics. </p>
                    {/* hr */}                           
                    </div>
            </div>

        </div>
        )
    }
}

export default AboutMe;