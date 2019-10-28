import React from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';
import { withRouter } from 'react-router';

import selfLearning from '../../Assets/autoaprendizajeIcon.png';
import selfPlanning from '../../Assets/autogestionIcon.png';
import helper from '../../Assets/ayudaIcon.png';
import brainstorming from '../../Assets/brainstormingIcon.png';
import comunication from '../../Assets/comunicacionIcon.png';
import empathy from '../../Assets/empatiaIcon.png';
import feedback from '../../Assets/feedbackIcon.png';
import publicSpeaker from '../../Assets/hablarenpublicoIcon.png';
import agile from '../../Assets/iteracionIcon.png';
import teamWork from '../../Assets/trabajoequipoIcon.png';
import userCentricity from '../../Assets/usercentricityIcon.png'

class ListOfSoft extends React.Component {
    render() {
        return (
            <List style={{ width: '250px' }} className="softIcon-box">
                <ListItem>
                    <ListItemContent>
                        <img src={selfLearning} className="soft-skills-logo" alt="autoaprendizaje-logo"></img>
                        Autoaprendizaje
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={selfPlanning} className="soft-skills-logo" alt="autogestion-logo"></img>
                        Autogestion
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={helper} className="soft-skills-logo" alt="ayuda-logo"></img>
                        Ayudar a otrxs
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={brainstorming} className="soft-skills-logo" alt="ideacion-logo"></img>
                        Ideación
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={comunication} className="soft-skills-logo" alt="comunicación-logo"></img>
                        Comunicación efectiva
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={empathy} className="soft-skills-logo" alt="empatia-logo"></img>
                        Empatía
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={feedback} className="soft-skills-logo" alt="retrolaimentación-logo"></img>
                        Dar y recibir retroalimentación
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={publicSpeaker} className="soft-skills-logo" alt="hablar-en-publico-logo"></img>
                        Hablar en público
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={agile} className="soft-skills-logo" alt="iteración-logo"></img>
                        Metodologías ágiles
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={teamWork} className="soft-skills-logo" alt="trabajo-en-equipo-logo"></img>
                        Trabajo en equipo
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={userCentricity} className="soft-skills-logo" alt="trabajo-centrado-en-usuario-logo"></img>
                        Desarrollo centrado en el usuario
                    </ListItemContent>
                </ListItem>
            </List>
        );
    }
}

export default withRouter(ListOfSoft);