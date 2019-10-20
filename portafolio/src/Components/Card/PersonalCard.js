// This components is a child for a view/component LandingPage.
import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, Icon } from 'react-mdl';

class PersonalCard extends React.Component {
    render() {
        return (
            <Card className="card-box">
                <CardTitle expand
                    className="card-title">
                    <div className="presentation-box">
                        <ul class="social-buttons my-3 my-md-3 my-lg-4 mx-auto  " id="anima">
                            <li>
                                <a href="docs/cv.pdf" download="BrendaSanreyCV" class="brandico-cv mr-2"><i class="fas fa-file-download align-middle mt-1"></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/brendasanrey" target="_blank" class="brandico-github mx-2"><i class="fab fa-github align-middle mt-1"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/brendasanrey" target="_blank" class="brandico-link ml-2"> <i
                                    class="fab fa-linkedin-in align-middle mt-1"></i></a>
                            </li>
                        </ul>
                    </div>
                </CardTitle>
                <CardText>
                    Ante el panorama de la transformación digital y tras años de experiencia en:
                    compras, importación y logística internacional, decidí continuar desarrollando
                    mi capacidad de auto aprendizaje, adaptabilidad y resolución de problemas
                    para buscar posicionarme activamente en la creación de la industria 4.0.
                </CardText>
                <CardActions border>
                    <Button raised colored>Descarga mi CV</Button>
                    <Button raised colored>Buscame en linkedin</Button>

                </CardActions>
            </Card>
        );
    }
}

export default PersonalCard;