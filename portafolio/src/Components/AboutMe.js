import React, { Component } from 'react';
import HomeBtn from './HomeButton/HomeBtn'

class About extends Component {
    render() {
        return (
            <div>
                <section className="home-btn-row">
                    <HomeBtn />
                </section>
                <h1>Acerca de mí</h1>
            </div>
        );
    }
}

export default About;