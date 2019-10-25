import React, { Component } from 'react';
import AboutmeTab from './AboutmeTab/AboutmeTab';

class About extends Component {
    render() {
        return (
            <section className="container-aboutme">
                <AboutmeTab />
                    <article>
                        <h4>¡Bienvenida/o!</h4>
                        <h5>
                            Ante el panorama de la transformación digital decidí hacer carrera en la tecnología
                            para posicionarme activamente en la creación de la industria 4.0.
                        </h5>
                        <h5>
                            En <strong> 6 meses</strong> me preparé cómo desarrolladora
                        <strong> Front-end </strong>, pertenezco a la <em>8va generación de Laboratoria en México</em>.
                        <br></br>
                        Los retos han sido:
                        </h5>
                        <ol>
                            <li>Desarrollar habilidades técnicas ("tech skills") gracias a la práctica orientada a proyectos.</li>
                            <li>Comprender y aplicar <em>"mentalidad de crecimiento"</em>.</li>
                            <li>Aplicar la retroalimentación constante sobre habilidades psico-emocionales ("soft skills") para <em>ser programadora</em> y aprovechar mi previa experiencia profesional.</li>
                        </ol>
                        <h5>
                            Estudio los Sábados la licenciatura en Derecho en Ciudad Universitaria (UNAM SUA).
                        </h5>
                        <h5>Me considero <strong>empática, proactiva, analítica y persistente</strong>, siempre estoy dispuesta a ayudar a otrxs, 
                          <strong> transmitir y recibir conocimiento</strong> por medio del intercambio de ideas ¡me encanta!.
                        </h5>
                        <h4>Te invito a explorar las tecnologías que he utilizado y los proyectos en que se aplicaron. </h4>
                    </article>
            </section>
        );
    }
}

export default About;