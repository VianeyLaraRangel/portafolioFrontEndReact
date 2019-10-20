// This components is a child for a view/component LandingPage.
import React from 'react';
import { Card, CardTitle , CardText , CardActions , Button } from 'react-mdl';

class PersonalCard extends React.Component {
    render() {
        return (
            <Card className="card-box">
                <CardTitle expand 
                    className="card-title">
                    ¡Hola!
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        );
    }
}

export default PersonalCard;

// style={{ color: '#000000', background: 'url(https://i.ibb.co/9V94KV9/vianeylara.jpg) bottom right 50% no-repeat #9F9F9F' }}