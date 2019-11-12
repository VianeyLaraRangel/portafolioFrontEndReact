//This view shows a quickly view of me
import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';

import PersonalCard from "./Card/PersonalCard";

class Landing extends Component {
    render() {
        return (
                <Grid className="landing-grid">
                    <Cell col={9}>
                        <PersonalCard />
                    </Cell>
                </Grid>
        );
    }
}

export default Landing;