// This components is a child for a view/component LandingPage.
import React from 'react';
import { Card, CardTitle, CardText, CardActions, FABButton } from 'react-mdl';
import { withRouter } from 'react-router-dom';

import cvViLara from '../../Documents/vianeyLaraCV.pdf';

class PersonalCard extends React.Component {
    handleClick(ev) {
        ev.preventDefault();
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="card-container">
                <Card className="card-box">
                    <CardTitle expand
                        className="card-title">
                        <div className="presentation-icon">
                            <i className="fas fa-map-marker-alt">
                                <p className="p-fa-map-marker-alt">CDMX</p>
                            </i>
                        </div>
                    </CardTitle>
                    <CardText className="presentation-box">
                        <div className="presentation-text">
                            <p>Ante el panorama de la transformación digital
                                 y tras años de experiencia en compras, importación y logística
                                 internacional, decidí continuar desarrollando mi capacidad de
                                 auto aprendizaje, adaptabilidad y resolución de problemas para
                                 buscar posicionarme activamente en la creación de la industria 4.0
                        </p>
                        </div>
                        <div className="box-logo">
                            <img
                                className="logo-brand"
                                src="https://i.ibb.co/fCqCmGm/logo-Vi-La-Ra2-2-ok.png"
                                alt="LogoViLaRa" />
                        </div>
                    </CardText>
                    <CardActions border>
                        <div className="social-buttons" id="anima">
                            <FABButton>
                                <a href={cvViLara} download="VianeyLaraRangelCV">
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
            </div>
        );
    }
}

export default withRouter(PersonalCard);