// This components is a child for componente Header(NavBar) 
//on app.js except first view "/".
import React from 'react';
import { Button } from 'react-mdl';
import { withRouter} from 'react-router';
import { Link } from 'react-router-dom';

class HomeBtn extends React.Component {
    render() {
        return (
            <Button accent ripple>
                <Link to="/">
                <i className="fas fa-home"></i>
                </Link>
            </Button>
        );
    }
}

export default withRouter(HomeBtn);