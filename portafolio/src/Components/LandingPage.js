//This view shows a quickly view of me
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import PersonalCard from './Card/PersonalCard';
import PresentationCollage from './Collage/CollageImage';

class Landing extends Component {
    render() {
        return (
                <Grid className="landing-grid">
                    <Cell col={6} phone={12}>
                        <PersonalCard />
                    </Cell>
                    <Cell col={6} hidePhone>
                        <PresentationCollage />
                    </Cell>
                </Grid>
        );
    }
}

export default Landing;