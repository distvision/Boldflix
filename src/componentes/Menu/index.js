import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'

// import ButtonLink from './componentes/ButtonLink';

function Menu() {
    return (
        <nav className="Menu" >
            <a  href="/">
            <img className="Logo" src = {Logo} alt="Boldflixlogo" />
            </a>

            <Button as="a" className="ButttonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )

}

export default Menu;