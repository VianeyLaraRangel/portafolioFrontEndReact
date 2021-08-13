// This component is principal/initial page contains a navbar and sidebar from hamburguer icon to all webApp.
import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/Main';
import { Link, Switch, Route } from 'react-router-dom';

import './App.css';
import './Responsive.css';

import LaboratoriaLogo from './Assets/LaboratoriaLok.png';
// import LogoBrand from './Assets/logoViLaRaRecortado.png';

import HomeBtn from './Components/HomeButton/HomeBtn'

class App extends Component {
    render() {
        return (
            <Layout>
                <Header
                    className="header-color">
                    <Navigation className="link-desktop">
                        <Link to="/aboutme">Acerca de mí</Link>
                        <Link to="/projects">Proyectos</Link>
                        {/* <Link to="/resume">Experiencia</Link> */}
                        <Link to="/contact">Contacto</Link>
                    </Navigation>
                    <Navigation>
                        <Switch>
                            <Route path="/">
                                <HomeBtn />
                            </Route>
                        </Switch>
                    </Navigation>
                </Header>
                <Drawer className="hamburguer-menu">
                    <div className="box-logo-drawer">
                        <img
                            src={LaboratoriaLogo}
                            width="80"
                            height="80"
                            alt="simpleLaboratoriaLogo"
                            className="labo-logo"
                        />
                    </div>
                    <Navigation className="link-mobile">
                        <Link to="/aboutme">Acerca de mí</Link>
                        <Link to="/projects">Proyectos</Link>
                        {/* <Link to="/resume">Experiencia</Link> */}
                        <Link to="/contact">Contacto</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>
        );
    }
}

export default App;
