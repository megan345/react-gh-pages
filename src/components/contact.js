import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { ButtonToolBar } from 'react-bootstrap';

class Contact extends Component {
    render(){
        return(
        <div id="contact">
            <div className="contact">
                <h1 className="contact-title">Contact</h1>
                    <div className="contact-child">
                    {/* hr */}
                        <div className="row1 left">
                            <Button variant="outline-dark" className="left email">Email</Button>
                            <Button variant="outline-dark" className="left phone">Phone</Button>
                        </div>
                        <div className="row2 right">
                            <Button variant="outline-dark" className="right linkedin">LinkedIn</Button>
                            <Button variant="outline-dark" className="right CV">CV</Button>
                        </div> 
                        <p>Thanks for visiting</p>
                        <p>This site was created using React</p>               
                    </div>
                <div className="banner-box">

                </div>
            </div>
        </div>
        )
    }
}

export default Contact;