import React, { Component } from 'react';
import { FABButton } from 'react-mdl';
// import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <FABButton >
                <a href="https://api.whatsapp.com/send?phone=5521013057&text=&source=&data=" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </FABButton>
        );
    }
}

export default Contact;
