import React from 'react';

import Logo from './Logo';
import DarkMode from './DarkMode';

import './Navbar.scss';

function Navbar() {

    return (
        <nav className="navbar">
            <div className="container">
                <Logo />
                <DarkMode />
            </div>
        </nav>
    );
}

export default Navbar;