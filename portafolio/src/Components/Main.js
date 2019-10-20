//This component is the route map.
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Experiencia from './Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Experiencia} />
    </Switch>
)

export default Main;