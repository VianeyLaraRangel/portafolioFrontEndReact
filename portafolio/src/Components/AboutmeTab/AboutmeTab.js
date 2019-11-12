// This components is a child for component/view AboutMe 
import React from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import { withRouter } from 'react-router';

import ListOfTech from '../ListForTech/TechList';
import ListOfSoft from '../ListForTech/SoftList'

// Simple header with scrollable tabs
class AboutmeTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 2 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <ListOfTech />
            )
        } else if (this.state.activeTab === 1) {
            return (
                <ListOfSoft/>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <article>
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
            )
        }
    }

    render() {
        return (
            <div className="aboutme-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                    <Tab>Tecnologías</Tab>
                    <Tab>Habilidades</Tab>
                    <Tab>Presentación</Tab>
                </Tabs>
                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        );
    }
}

export default withRouter(AboutmeTab);