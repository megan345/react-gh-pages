import React from 'react';
import LandingPage from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import CV from './CV';
import { HashRouter as Router, Route } from 'react-router-dom';

const Main = () => (
    <Router>
        <Route exact path="/" component= {LandingPage} />
        <Route exact path="/projects" component= {Projects} />
        <Route exact path="/about" component= {About} />
        <Route exact path="/contact" component= {Contact} />
        <Route exact path="/CV" component= {CV} />
    </Router>
)

export default Main;