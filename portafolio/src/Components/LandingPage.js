//This view shows a quickly view of me
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import PersonalCard from "./Card/PersonalCard";

class Landing extends Component {
    render() {
        return (
            <div className="hero-slash">
                <Grid className="landing-grid">
                    <Cell col={6}>
                        <PersonalCard />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;