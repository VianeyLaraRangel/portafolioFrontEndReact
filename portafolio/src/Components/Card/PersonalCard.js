// This components is a child for a view/component LandingPage.
import React from 'react';
import { Card, CardTitle, CardText, CardActions, FABButton } from 'react-mdl';
// import LaboratoriaLogo from '../../Assets/LaboratoriaLok.png';
// import FacDerechoLogo from '../../Assets/FacDereechoAzulok.jpg';
import cvViLara from '../../Documents/vianeyLaraCV.pdf';

class PersonalCard extends React.Component {
    render() {
        return (
            <Card className="card-box">
                <CardTitle expand
                    className="card-title">
                    <div className="presentation-icon">
                        
                        {/* <img src={LaboratoriaLogo} alt="LaboratoriaLogo" className="logo-labo" />
                        <img src={FacDerechoLogo} alt="FacDerechoLogo" className="logo-facderecho" /> */}
                        <i className="fas fa-map-marker-alt">
                            <p className="p-fa-map-marker-alt">CDMX</p>
                        </i>
                    </div>
                </CardTitle>
                <CardText className="presentation-box">
                    <div className="box-logo">
                        <img
                            className="logo-brand"
                            src="https://i.ibb.co/fCqCmGm/logo-Vi-La-Ra2-2-ok.png"
                            alt="LogoViLaRa" />
                    </div>
                </CardText>
                <CardActions border>
                    <div className="social-buttons" id="anima">
                        <FABButton>
                            <a href={cvViLara} download="VianeyLaraRangelCV">
                                <i className="fas fa-file-download"></i>
                            </a>
                        </FABButton>
                        <FABButton>
                            <a href="https://github.com/VianeyLaraRangel" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </FABButton>
                        <FABButton>
                            <a href="https://www.linkedin.com/in/vianeylararangel/" target="_blank" rel="noopener noreferrer">
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