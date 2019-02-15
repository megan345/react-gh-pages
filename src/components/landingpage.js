import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                        alt="avatar"
                        className="avatar-image"
                        />
                        <div className="banner-text">
                            <h1>JavaScript/ ReactJS Developer</h1>

                        {/* hr */}

                            <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB</p>
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
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;