// This components is a child for a view/component LandingPage.
import React from 'react';
import { Card, CardTitle, CardText, CardActions, FABButton } from 'react-mdl';
import { withRouter } from 'react-router';

import cvViLara from '../../Documents/vianeyLaraCV.pdf';

class PersonalCard extends React.Component {
    render() {
        return (
            <Card className="card-box">
                <CardTitle expand
                    className="card-title">
                    <section>
                        <i className="fas fa-map-marker-alt">
                            <p className="presentation-icon">CDMX</p>
                        </i>
                        <i className="fas fa-clock">
                            <p className="presentation-icon">29 años</p>
                        </i>
                        <i className="fas fa-mail-bulk">
                            <p className="presentation-icon">vianey.lara.rangel@gmail.com</p>
                        </i>
                    </section>
                </CardTitle>
                <CardText className="presentation-box">
                    <div className="presentation-text">
                        <p> 
                        Analista incansable y autodidacta, ante el panorama de la transformación digital,
                            decidí comenzar una carrera en tecnología. 
                        Encontré en la programación web, la oportunidad de aplicar la creatividad,
                            persistencia e ideación constante con la que cuento.
                         <strong> Te invito a conocer más de lo que he hecho </strong>
                          y así encontrar juntxs la forma de 
                         <strong> colaborar profesionalmente.</strong> 
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
        );
    }
}

export default withRouter(PersonalCard);