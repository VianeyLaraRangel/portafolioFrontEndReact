//This view shows a quickly view of me
import React, { Component } from 'react';
import { Grid } from 'react-mdl';

import PersonalCard from "./Card/PersonalCard";

class Landing extends Component {
    render() {
        return (
            <div >
                <Grid className="landing-grid">
                        <PersonalCard />
                </Grid>
            </div>
        );
    }
}

export default Landing;