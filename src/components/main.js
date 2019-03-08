import React from 'react';
import Home from './home';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Skills from './skills';
import { HashRouter as Router, Route } from 'react-router-dom';
import Fullpage from './fullpage';

const Main = () => (
    <Router>
        <div>
            <Route exact path="/" component= {Fullpage} />
            <Route exact path="/projects" component= {Projects} />
            <Route exact path="/about" component= {AboutMe} />
            <Route exact path="/contact" component= {Contact} />
            <Route exact path="/skills" component= {Skills} />
        </div>
    </Router>
)

export default Main;