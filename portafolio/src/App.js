import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';

import './App.css';
import './Responsive.css';

class App extends Component {
  render () {
      return (
        <div className="demo-big-content">
            <Layout>
                <Header 
                className="header-color" 
                title="Vianey Lara" 
                scroll>
                    <Content>
                        <div className="box-logo">
                            <img 
                            className="logo-brand"
                            src="https://i.ibb.co/fCqCmGm/logo-Vi-La-Ra2-2-ok.png" 
                            alt="LogoViLaRa"/>
                        </div>
                    </Content>
                    <Navigation className="link-desktop">
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">Acerca de mí</Link>
                        <Link to="/projects">Proyectos</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer 
                className="hamburguer-menu" 
                >
                    {/* <Content> */}
                        <div className="box-logo-drawer">
                            <img
                                src="https://i.ibb.co/LNy2vrW/melted-Rubik-ok.png"
                                alt="MeltedRubik"
                                className="avatar-img-drawer"
                            />
                        </div>
                    {/* </Content> */}
                    <Navigation className="link-mobile">
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">Acerca de mí</Link>
                        <Link to="/projects">Proyectos</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
