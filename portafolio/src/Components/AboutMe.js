import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container-aboutme">
                <section className="aboutme-text">
                    <p>
                        En los <strong>últimos 6 meses</strong> me convertí en
                        <strong> Front-end </strong> developer de la <em>8va generación de Laboratoria </em>.
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
                    desarrollar nuevas habilidades "soft" y mejorar profundamente las relacionadas a mi experiencia profesional previa.
                    </p>
                </section>
            </div>
        );
    }
}

export default About;