// This components is a child for a view/component LandingPage.
import React from 'react';
import { withRouter } from 'react-router';

class PresentationCollage extends React.Component {
    render() {
        return (
            <div className="collage-image-wrapper">
                collage-image-wrapper
                <div className="collage-image-container">
                    collage-image-container
                    <section>
                        <figure>
                            figure
                            <div className="collage-outer">
                                collage outer
                                <div className="collage-inner">collage-inner</div>
                            </div>
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
            </div>
        );
    }
}

export default withRouter(PresentationCollage);