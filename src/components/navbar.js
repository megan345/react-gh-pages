import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
        <div>
            <div className="nav">
                <ul className="navbar">
                    <li><a id="home">Home</a></li>
                    <li><a href="#AboutMe">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="navright">
                <ul className="navbar" id="left">
                    <li>{/*LinkedIn*/}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square"
                        aria-hidden="true" ></i>
                        </a>
                    </li>
                    <li>{/*Github*/}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square"
                            aria-hidden="true" ></i>
                        </a>
                    </li>
                    <li>{/*Email*/}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-envelope"
                            aria-hidden="true" ></i>
                        </a>
                    </li>
                    <li>{/*Phone*/}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-phone"
                            aria-hidden="true" ></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}