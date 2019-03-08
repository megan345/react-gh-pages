import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { ButtonToolBar } from 'react-bootstrap';

class Contact extends Component {
    render(){
        return(
        <div id="contact">
            <div className="contact">
                <div className="banner-text">
                    <h1 className="contact-title">Contact</h1>
                </div>
                    <div className="contact-child">
                    {/* hr */}
                        <div className="row1 left">
                            <p className="left email"> 
                                <i className="fa fa-envelope"
                                aria-hidden="true" ></i> Email
                            </p>
                            <p className="left phone">
                                <i className="fa fa-phone"
                                aria-hidden="true" ></i> Phone
                            </p>
                        </div>
                        <div className="row2 right">
                            <p className="right linkedin">
                                <i className="fa fa-linkedin-square"
                                aria-hidden="true" ></i> LinkedIn
                            </p>
                            <p className="right CV">CV</p>
                        </div>
                        <div>
                            <p>Thanks for visiting</p>
                            <p>This site was created using React</p> 
                        </div>               
                    </div>
                <div className="banner-box">

                </div>
            </div>
        </div>
        )
    }
}

export default Contact;