// This components is a child for a view/component LandingPage.
import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

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
                <CardActions border className="social-buttons" id="anima">
                    <Button raised colored>
                        <a href="../../Documents/vianeyLaraCV.pdf" download="VianeyLaraRangelCV">
                            <i class="fas fa-file-download"></i>
                        </a>
                    </Button>
                    <Button raised colored>
                        <a href="https://github.com/VianeyLaraRangel" target="_blank" class="brandico-github">
                            <i class="fab fa-github"></i>
                        </a>
                    </Button>
                    <Button raised colored>
                        <a href="https://www.linkedin.com/in/vianeylararangel/" target="_blank" class="brandico-github">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </Button>

                </CardActions>
            </Card>
        );
    }
}

export default PersonalCard;