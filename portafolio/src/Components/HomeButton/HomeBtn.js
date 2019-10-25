// This components is a child for componente Header(NavBar) 
//on app.js except first view "/".
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class HomeBtn extends React.Component {
    render() {
        return (
            <ul>
                <li >
                    <Link to="/" id="home-icon">
                        <i className="fas fa-home"></i>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default withRouter(HomeBtn);