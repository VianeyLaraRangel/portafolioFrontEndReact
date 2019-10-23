import React, { Component } from 'react';
import HomeBtn from './HomeButton/HomeBtn'

class About extends Component {
    render() {
        return (
            <div className="container-aboutme">
                <section className="home-btn-row">
                    <HomeBtn />
                </section>
                <section className="aboutme-text">
                    <p>
                        En los <strong>últimos 6 meses</strong> me convertí en
                        <strong> Front-end </strong> developer de la 8va generación de Laboratoria.
                    </p>
                    <p>
                        Estudio <strong>los Sábados la licenciatura en Derecho</strong> en Ciudad Universitaria (UNAM SUA).
                    </p>
                    <p>
                        Ante el panorama de la transformación digital 
                        <strong> decidí hacer carrera en la tecnología </strong>
                        y así posicionarme activamente en la creación de la industria 4.0.
                    </p>
                    <p>
                    Para lograr este objetivo, comencé con el entendimiento del ecosistema tech relacionado a mi carrera profesional: Fintech y a tecnologías disruptivas cómo "Blockchain". Esto me llevó a elegir a Laboratoria (Startup con un alto impacto social para mujeres) para comenzar una carrera tech cómo "Front-end developer" con Javascript para desarrollar nuevas habilidades "soft" y mejorar profundamente las relacionadas a mi experiencia profesional previa.
                    </p>
                </section>
            </div>
        );
    }
}

export default About;