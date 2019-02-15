import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    {/* REACT PROJECTS */}
    if (this.state.activeTab === 0) {
        return (
            <div className="projects-grid">
                 {/* Project 1 */}
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://avatars3.githubusercontent.com/u/41964997?s=460&v=4) center / cover'}}>Kodflix</CardTitle>
                    <CardText>
                        An app built during "Kodiri" a 2 month intensive React/JavaScript Bootcamp, this app
                        models Netflix in its design and functionality.
                    </CardText>
                    <CardActions border>
                        <Button colored><a style={{textDecoration: 'none'}} target="_blank" href="https://github.com/megan345/kodflix">Have a Look</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    } else if (this.state.activeTab === 1) {
        return (
            <div><h1>This is Angular</h1></div>
        )
    } else if (this.state.activeTab === 2) {
        return (
            <div><h1>This is Vue</h1></div>
        )
    } else if (this.state.activeTab === 3) {
        return (
            <div><h1>This is MongoDB</h1></div>
        )
    }
    // if(this.state.activeTab === 0){
    //   return(
    //     <div className="projects-grid">
    //       {/* Project 1 */}
    //       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    //         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
    //         <CardText>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    //         </CardText>
    //         <CardActions border>
    //           <Button colored>GitHub</Button>
    //           <Button colored>CodePen</Button>
    //           <Button colored>Live Demo</Button>
    //         </CardActions>
    //         <CardMenu style={{color: '#fff'}}>
    //           <IconButton name="share" />
    //         </CardMenu>
    //       </Card>
    //       {/* Project 2 */}
    //       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    //         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
    //         <CardText>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    //         </CardText>
    //         <CardActions border>
    //           <Button colored>GitHub</Button>
    //           <Button colored>CodePen</Button>
    //           <Button colored>Live Demo</Button>
    //         </CardActions>
    //         <CardMenu style={{color: '#fff'}}>
    //           <IconButton name="share" />
    //         </CardMenu>
    //       </Card>
    //       {/* Project 3 */}
    //       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    //         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
    //         <CardText>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    //         </CardText>
    //         <CardActions border>
    //           <Button colored>GitHub</Button>
    //           <Button colored>CodePen</Button>
    //           <Button colored>Live Demo</Button>
    //         </CardActions>
    //         <CardMenu style={{color: '#fff'}}>
    //           <IconButton name="share" />
    //         </CardMenu>
    //       </Card>
    //     </div>
    //   )
    // } else if(this.state.activeTab === 1) {
    //   return (
    //     <div><h1>This is Angular</h1></div>
    //   )
    // } else if(this.state.activeTab === 2) {
    //   return (
    //     <div><h1>This is VueJS</h1></div>
    //   )
    // } else if(this.state.activeTab === 3) {
    //   return (
    //     <div><h1>This is MongoDB</h1></div>
    //   )
    // }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;