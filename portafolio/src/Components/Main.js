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
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Experiencia} />
    </Switch>
)

export default Main;