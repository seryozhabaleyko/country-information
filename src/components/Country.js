import React from 'react';
import { Link } from 'react-router-dom';

import slugify from 'slugify';

import './Country.scss';

function Country({ name, flag, population, region, capital }) {

    const slug = slugify(name.toLowerCase());

    return (
        <Link to={`/country/${slug}`}>
            <article className="country">
                <img src={flag} alt={name}/>
                <div className="country-body">
                    <h1 className="country-title">{name}</h1>
                    <ul className="country-info">
                        <li>
                            <strong>Population: </strong>
                            {population}
                        </li>
                        <li>
                            <strong>Region: </strong>
                            {region}
                        </li>
                        <li>
                            <strong>Capital: </strong>
                            {capital}
                        </li>
                    </ul>
                </div>
            </article>
        </Link>
    );
}

export default Country;