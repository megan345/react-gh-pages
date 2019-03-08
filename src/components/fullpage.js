import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './home';
import AboutMe from './aboutme';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';

const Fullpage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home />
            <button className='pink-banner' onClick={() => fullpageApi.moveSectionDown()}>
              Click
            </button>
          </div>
          <div className="section">
            <AboutMe />
          </div>
          <div className="section">
            <Projects />
          </div>
          <div className="section">
            <Skills />
          </div>
          <div className="section">
            <Contact />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;