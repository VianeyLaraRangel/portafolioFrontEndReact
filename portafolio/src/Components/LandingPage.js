import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://i.ibb.co/HdG0Tk9/photo-Linkedin.png"alt="VianeyLara´s pic"/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;