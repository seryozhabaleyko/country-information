import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

function Logo() {

    return (
        <Link to="/" className="logo">Where in the world?</Link>
    );
}

export default Logo;