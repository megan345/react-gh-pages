import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Header, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Title">
              <Navigation>
                <Link to='/about'>About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/CV">CV</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
          <Drawer title="Title">
              <Navigation>
              <Link to='/about'>About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/CV">CV</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content> 
            <Main />
          </Content>

        </Layout>
      </div>
    );
  }
}

export default App;
