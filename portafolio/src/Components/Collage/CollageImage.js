// This components is a child for a view/component LandingPage.
import React from 'react';
import { withRouter } from 'react-router';

class PresentationCollage extends React.Component {
    render() {
        return (
            <div className="collage-image-wrapper">
                <section>
                    <figure>
                        <div></div>
                    </figure>
                    <figure>
                        <div></div>
                    </figure>
                </section>
                <section>
                    <figure>
                        <div></div>
                    </figure>
                </section>
            </div>
        );
    }
} 

export default withRouter(PresentationCollage);