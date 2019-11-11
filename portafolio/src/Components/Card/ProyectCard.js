//This component es a child for a view/component Projects
import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { withRouter } from 'react-router';

import html from '../../Assets/html5Logo.png';
import js from '../../Assets/JavaScriptLogo.jpg';
import css from '../../Assets/css3Logo.png';
import bootstrap from '../../Assets/bootstrapLogo.jpg';
import firebase from '../../Assets/firebaseLogo.png';
import react from '../../Assets/reactLogo.png';
import ibm from '../../Assets/ibmLogo.png';
import watson from '../../Assets/watson-ibm-logo.jpg';


class ProjectCard extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {/* DataLovers Card  */}
                    <Card shadow={0} style={{ width: '20rem', margin: '1rem' }}>
                        <CardTitle style={{ color: '#000000', height: '15rem', background: 'url(https://i.ibb.co/12Shwsd/pokepedia-Screenshot.png) left / cover' }}>
                        </CardTitle>
                        <CardText className="project-card">
                            <h6>POKEPEDIA</h6>
                            Responsive webApp que permite filtrar por especie y debilidades
                            el listado de la 1° generacion de pokemones.
                            <br></br>
                            Dirigido a nostálgicos de la serie.
                </CardText>
                        <CardText className="project-technologies">
                            <img src={js} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={html} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={css} alt="tecnologias-logo" className="img-tech"></img>
                        </CardText>
                        <CardActions>
                            <Button colored href="https://vianeylararangel.github.io/MEX-Data-Lovers-008/src/index.html" target="_blank">
                                DEMO
                            </Button>
                            <Button colored href="https://github.com/VianeyLaraRangel/MEX-Data-Lovers-008" target="_blank">
                                CODIGO FUENTE
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                {/* Social Network Card */}
                <div>
                    <Card shadow={0} style={{ width: '20rem', margin: '1rem' }}>
                        <CardTitle style={{ color: '#000000', height: '15rem', background: 'url(https://i.ibb.co/kHjr7Zj/hopaki-Screen.png) left / cover' }}>
                        </CardTitle>
                        <CardText className="project-card">
                            <h6>HOPAKI</h6>
                            Es una "Red Social" estructurada cómo single page aplication <strong>(SPA)</strong> que permite "conectar"
                             a personas que educan a sus hijos en casa.
                        </CardText>
                        <CardText className="project-technologies">
                            <img src={js} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={html} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={css} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={firebase} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={bootstrap} alt="tecnologias-logo" className="img-tech"></img>
                        </CardText>
                        <CardActions>
                            <Button colored href="https://hopaki-prueba.firebaseapp.com/" target="_blank">
                                DEMO
                            </Button>
                            <Button colored href="https://github.com/VianeyLaraRangel/MEX008-social-network" target="_blank">
                                CODIGO FUENTE
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                {/* This4That Card */}
                <div>
                    <Card shadow={0} style={{ width: '20rem', margin: '1rem' }}>
                        <CardTitle style={{ color: '#000000', height: '15rem', background: 'url(https://i.ibb.co/fMNFm2m/this4that-Screen.png) left / cover' }}>
                        </CardTitle>
                        <CardText className="project-card">
                            <h6>POKEPEDIA</h6>
                            Responsive webApp que permite filtrar por tipo y debilidades el listado de la 1° generacion de pokemones. Dirigido a nostálgicos de la serie.
                        </CardText>
                        <CardText className="project-technologies">
                            <img src={js} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={html} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={css} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={firebase} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={bootstrap} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={ibm} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={watson} alt="tecnologias-logo" className="img-tech"></img>
                        </CardText>
                        <CardActions>
                            <Button colored href="https://vianeylararangel.github.io/MEX-Data-Lovers-008/src/index.html" target="_blank">
                                DEMO
                            </Button>
                            <Button colored href="https://github.com/VianeyLaraRangel/MEX-Data-Lovers-008" target="_blank">
                                CODIGO FUENTE
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                {/*BurguerQueen Card */}
                <div>
                    <Card shadow={0} style={{ width: '20rem', margin: '1rem' }}>
                        <CardTitle style={{ color: '#000000', height: '15rem', background: 'url(https://i.ibb.co/12Shwsd/pokepedia-Screenshot.png) left / cover' }}>
                        </CardTitle>
                        <CardText className="project-card">
                            <h6>POKEPEDIA</h6>
                            Responsive webApp que permite filtrar por tipo y debilidades el listado de la 1° generacion de pokemones. Dirigido a nostálgicos de la serie.
                        </CardText>
                        <CardText className="project-technologies">
                            <img src={html} alt="tecnologias-logo" className="img-tech"></img>
                        </CardText>
                        <CardActions>
                            <Button colored href="https://vianeylararangel.github.io/MEX-Data-Lovers-008/src/index.html" target="_blank">
                                DEMO
                            </Button>
                            <Button colored href="https://github.com/VianeyLaraRangel/MEX-Data-Lovers-008" target="_blank">
                                CODIGO FUENTE
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withRouter(ProjectCard);