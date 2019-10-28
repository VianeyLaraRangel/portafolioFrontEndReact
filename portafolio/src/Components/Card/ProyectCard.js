//This component es a child for a view/component Projects
import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu , IconButton } from 'react-mdl';
import { withRouter } from 'react-router';

class ProjectCard extends React.Component {
    render() {
        return (
            <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>DEMO</Button>
                    <Button colored>CODIGO FUENTE</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        );
    }
}

export default withRouter(ProjectCard);