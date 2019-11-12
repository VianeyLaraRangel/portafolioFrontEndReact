import React, { Component } from 'react';
import { FABButton } from 'react-mdl';
// import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <div className="contact-box">
                <section>
                    <p>¿Buscas una desarrolladora o tienes
                        alguna pregunta acerca de mi trabajo?
                        <br></br>
                        Contáctame.
                    </p>
                </section>
                <section className="contact-buttons">
                    <FABButton className="contact-item">
                        <a href="https://api.whatsapp.com/send?phone=5521013057&text=&source=&data="
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </FABButton>
                    <FABButton className="contact-item" >
                        <a href="mailto:vianey.lara.rangel@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="far fa-envelope"></i>
                        </a>
                    </FABButton>
                    <FABButton  className="contact-item">
                        <a href="https://www.instagram.com/vinicialara/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </FABButton>
                    <FABButton  className="contact-item">
                        <a href="https://www.facebook.com/mrs.vinicia"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </FABButton>
                    <FABButton className="contact-item">
                        <a href="https://medium.com/@vianey.lara.rangel"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-medium"></i>
                        </a>
                    </FABButton>
                    <FABButton className="contact-item">
                        <a href="https://twitter.com/mrsvinicia"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </FABButton>
                </section>
            </div>
        );
    }
}

export default Contact;
