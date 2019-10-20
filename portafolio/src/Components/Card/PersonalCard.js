// This components is a child for a view/component LandingPage.
import React from 'react';
import { Card, CardTitle, CardText, CardActions, FABButton } from 'react-mdl';

class PersonalCard extends React.Component {
    render() {
        return (
            <Card className="card-box">
                <CardTitle expand
                    className="card-title">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>CDMX</p>
                </CardTitle>
                <CardText className="presentation-box">
                    <p> DESARROLLADORA + ABOGADA</p>
                </CardText>
                <CardActions border>
                    <div className="social-buttons" id="anima">
                        <FABButton>
                            <a href="../../src/Documents/vianeyLaraCV.pdf" download="VianeyLaraRangelCV">
                                <i className="fas fa-file-download"></i>
                            </a>
                        </FABButton>
                        <FABButton>
                            <a href="https://github.com/VianeyLaraRangel" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </FABButton>
                        <FABButton>
                            <a href="https://www.linkedin.com/in/vianeylararangel/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </FABButton>
                    </div>
                </CardActions>
            </Card>
        );
    }
}

export default PersonalCard;