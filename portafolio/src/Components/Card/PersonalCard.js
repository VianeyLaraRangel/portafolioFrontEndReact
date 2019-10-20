// This components is a child for a view/component LandingPage.
import React from 'react';
import { Card, CardTitle, CardText, CardActions, FABButton, Icon, IconButton } from 'react-mdl';

class PersonalCard extends React.Component {
    render() {
        return (
            <Card className="card-box">
                <CardTitle expand
                    className="card-title">
                    <div className="presentation-box">
                        <i class="fas fa-map-marker-alt">CDMX</i>
                    </div>
                </CardTitle>
                <CardText>
                    Ante el panorama de la transformación digital y tras años de experiencia en:
                    compras, importación y logística internacional, decidí continuar desarrollando
                    mi capacidad de auto aprendizaje, adaptabilidad y resolución de problemas
                    para buscar posicionarme activamente en la creación de la industria 4.0.
                </CardText>
                <CardActions border>
                    <div className="social-buttons" id="anima">
                        <FABButton>
                            <a href="../../src/Documents/vianeyLaraCV.pdf" download="VianeyLaraRangelCV">
                                <i className="fas fa-file-download"></i>
                            </a>
                        </FABButton>
                        <FABButton>
                            <a href="https://github.com/VianeyLaraRangel" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </FABButton>
                        <FABButton>
                            <a href="https://www.linkedin.com/in/vianeylararangel/" target="_blank">
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