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
import reactstrap from '../../Assets/reactstrapLogo.png'
import ibm from '../../Assets/ibmLogo.png';
import watson from '../../Assets/watson-ibm-logo.jpg';


class ProjectCard extends React.Component {
    render() {
        return (
            <div className="project-card-box">
                {/*BurguerQueen Card */}
                    <Card className="card-box card-box-project" style={{ width: '20rem', margin: '1rem' }}>
                        <CardTitle style={{ color: '#000000', height: '20rem', background: 'url(https://i.ibb.co/6NXBJzf/Mesereando-PWA.png) left / cover' }}>
                        </CardTitle>
                        <CardText className="project-card">
                            <h5>MESEREANDO</h5>
                            <p>
                            Progressive WebApp para <strong>Tableta electrónica</strong>
                            </p>
                        </CardText>
                        <CardText className="project-technologies">
                            <img src={react} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={reactstrap} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={js} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={html} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={css} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={firebase} alt="tecnologias-logo" className="img-tech"></img>
                        </CardText>
                        <CardActions>
                            <Button colored className="project-button" href="https://vianeylararangel.github.io/MEX008-FE-Burger-Queen/" target="_blank">
                                DEMO
                            </Button>
                            <Button colored className="project-button" href="https://github.com/VianeyLaraRangel/MEX008-FE-Burger-Queen" target="_blank">
                                CODIGO FUENTE
                            </Button>
                        </CardActions>
                    </Card>
                {/* Social Network Card */}
                    <Card className="card-box card-box-project" style={{ width: '20rem', margin: '1rem' }}>
                        <CardTitle style={{ color: '#000000', height: '15rem', background: 'url(https://i.ibb.co/kHjr7Zj/hopaki-Screen.png) left / cover' }}>
                        </CardTitle>
                        <CardText className="project-card">
                            <h5>HOPAKI</h5>
                            <p>
                                Es una "Red Social" estructurada cómo single page aplication <strong>(SPA)</strong> que permite "conectar"
                                 a personas que educan a sus hijos en casa.
                            </p>
                        </CardText>
                        <CardText className="project-technologies">
                            <img src={js} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={html} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={css} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={firebase} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={bootstrap} alt="tecnologias-logo" className="img-tech"></img>
                        </CardText>
                        <CardActions>
                            <Button colored className="project-button" href="https://hopaki-prueba.firebaseapp.com/" target="_blank">
                                DEMO
                            </Button>
                            <Button colored className="project-button" href="https://github.com/VianeyLaraRangel/MEX008-social-network" target="_blank">
                                CODIGO FUENTE
                            </Button>
                        </CardActions>
                    </Card>
                {/* DataLovers Card  */}
                    <Card className="card-box card-box-project" style={{ width: '20rem', margin: '1rem' }}>
                        <CardTitle style={{ color: '#000000', height: '15rem', background: 'url(https://i.ibb.co/12Shwsd/pokepedia-Screenshot.png) left / cover' }}>
                        </CardTitle>
                        <CardText className="project-card">
                            <h5>POKEPEDIA</h5>
                            <p>
                                Responsive webApp que permite filtrar por especie y debilidades
                                el listado de la 1° generacion de pokemones.
                            <br></br>
                                Dirigido a nostálgicos de la serie.
                            </p>
                        </CardText>
                        <CardText className="project-technologies">
                            <img src={js} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={html} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={css} alt="tecnologias-logo" className="img-tech"></img>
                        </CardText>
                        <CardActions>
                            <Button colored className="project-button" href="https://vianeylararangel.github.io/MEX-Data-Lovers-008/src/index.html" target="_blank">
                                DEMO
                            </Button>
                            <Button colored className="project-button" href="https://github.com/VianeyLaraRangel/MEX-Data-Lovers-008" target="_blank">
                                CODIGO FUENTE
                            </Button>
                        </CardActions>
                    </Card>
                {/* This4That Card */}
                    <Card className="card-box card-box-project" style={{ width: '20rem', margin: '1rem' }}>
                        <CardTitle style={{ color: '#000000', height: '15rem', background: 'url(https://i.ibb.co/fMNFm2m/this4that-Screen.png) left / cover' }}>
                        </CardTitle>
                        <CardText className="project-card">
                            <h5>This4That</h5>
                            <p>
                                MVP responsive + chatbot(IBM cloud). Proyecto desarrollado en hackaton de 8hrs
                                 para el cierre de la IBM Week en Laboratoria, utiliza
                                 un chatbot entrenado que utiliza la Inteligencia Artificial "Watson" en la
                                 plataforma IBM Cloud.
    
                                 This4That es la propuesta realizada a "Frida" una emprendedora de Victoria 147,
                                 que busca en el trueque la forma de impactar la ecología y la economía.
                                 Nuestro equipo "Ampersand" utilizó metodologías cómo Design thinking, del cuál IBM
                                  nos dió un taller de 8hrs.
                            </p>
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
                            <Button colored className="project-button" href="https://vianeylararangel.github.io/IBM-This4That/src/index.html" target="_blank">
                                DEMO
                            </Button>
                            <Button colored className="project-button" href="https://github.com/VianeyLaraRangel/IBM-This4That" target="_blank">
                                CODIGO FUENTE
                            </Button>
                        </CardActions>
                    </Card>
                {/*Cipher card */}
                    <Card className="card-box card-box-project" style={{ width: '20rem', margin: '1rem' }}>
                        <CardTitle style={{ color: '#000000', height: '15rem', background: 'url(https://i.ibb.co/FgHyVBp/cipher-Screen.png) center / cover' }}>
                        </CardTitle>
                        <CardText className="project-card">
                            <h5>DECOTIP</h5>
                            <p>
                                Mi primera página web, es un encriptador de dos vías que utiliza una
                            <strong> llave</strong> númerica cómo seguridad y que permite que unicamente
                                            las personas que la reciban lean el mensaje encriptado.
                            {/* Se utilizó el concepto de cifrado César. 
                            Para su creacción fueron utilizados fundamentos de UX design. */}
                            </p>
                        </CardText>
                        <CardText className="project-technologies">
                            <img src={js} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={html} alt="tecnologias-logo" className="img-tech"></img>
                            <img src={css} alt="tecnologias-logo" className="img-tech"></img>
                        </CardText>
                        <CardActions>
                            <Button colored className="project-button" href="https://vianeylararangel.github.io/MEX-008-Cipher/src/index.html" target="_blank">
                                DEMO
                            </Button>
                            <Button colored className="project-button" href="https://github.com/VianeyLaraRangel/MEX-008-Cipher" target="_blank">
                                CODIGO FUENTE
                            </Button>
                        </CardActions>
                    </Card>
            </div>
        );
    }
}

export default withRouter(ProjectCard);