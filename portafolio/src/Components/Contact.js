import React, { Component } from 'react';
import { FABButton } from 'react-mdl';
// import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <div>
                <p>¿Buscas una desarrolladora o tienes 
                    alguna pregunta acerca de mi trabajo? 
                    Contáctame.
                </p>
                <FABButton >
                    <a href="https://api.whatsapp.com/send?phone=5521013057&text=&source=&data=" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </FABButton>
                <FABButton >
                    <a href="mailto:vianey.lara.rangel@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <i className="far fa-envelope"></i>
                    </a>
                </FABButton>
                <FABButton >
                    <a href="https://www.facebook.com/mrs.vinicia" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <i class="fab fa-facebook"></i>
                    </a>
                </FABButton>
                <FABButton >
                    <a href="https://medium.com/@vianey.lara.rangel" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <i class="fab fa-medium"></i>
                    </a>
                </FABButton>
                <FABButton >
                    <a href="https://twitter.com/mrsvinicia" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <i class="fab fa-twitter"></i>
                    </a>
                </FABButton>
            </div>
        );
    }
}

export default Contact;
