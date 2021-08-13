//This view shows a quickly view of me
import React, { Component } from 'react';

import PersonalCard from './Card/PersonalCard';

class Landing extends Component {
    render() {
        return (
            <PersonalCard />        
        );
    }
}

export default Landing;