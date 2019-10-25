import React from 'react';
import { List, ListItem, ListItemAction, ListItemContent, Icon } from 'react-mdl';
import { withRouter } from 'react-router';

class ListOfTech extends React.Component {
    render() {
        return (
            <List style={{ width: '300px' }}>
                <ListItem>
                    <ListItemContent avatar="person">Bryan Cranston</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent avatar="person">Aaron Paul</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent avatar="person">Bob Odenkirk</ListItemContent>
                </ListItem>
            </List>
        );
    }
}

export default withRouter(ListOfTech);