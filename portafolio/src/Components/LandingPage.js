import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import PersonalCard from "./Card/PersonalCard";

class Landing extends Component {
    render() {
        return (
            <div >
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://i.ibb.co/9V94KV9/vianeylara.jpg"
                            alt="VianeyLara´s pic"
                            className="avatar-img"
                        />
                        <PersonalCard />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;