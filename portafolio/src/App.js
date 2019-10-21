// This component is principal/initial page contains a navbar and sidebar from hamburguer icon to all webApp.
import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';

import './App.css';
import './Responsive.css';

import LaboratoriaLogo from './Assets/LaboratoriaLok.png';
import FacDerechoLogo from './Assets/FacDereechoAzulok.jpg';


class App extends Component {
  render () {
      return (
        <div className="demo-big-content">
            <Layout>
                <Header 
                    className="header-color" 
                    title="Vianey Lara" 
                    scroll>
                    <Navigation className="link-desktop">
                        <Link to="/aboutme">Acerca de mí</Link>
                        <Link to="/projects">Proyectos</Link>
                        <Link to="/resume">Experiencia</Link>
                        <Link to="/contact">Contacto</Link>
                    </Navigation>
                </Header>
                <Drawer 
                className="hamburguer-menu">
                        <div className="box-logo-drawer">
                            <img
                                src={LaboratoriaLogo}
                                width="100"
                                height="100"
                                alt="simpleLaboratoriaLogo"
                                className="labo-logo"
                            />
                            <img
                                src={FacDerechoLogo}
                                width="80"
                                height="110"
                                alt="unamDerechoLogo"
                                className="ius-logo"
                            />
                        </div>
                    <Navigation className="link-mobile">
                        <Link to="/aboutme">Acerca de mí</Link>
                        <Link to="/projects">Proyectos</Link>
                        <Link to="/resume">Experiencia</Link>
                        <Link to="/contact">Contacto</Link>
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
