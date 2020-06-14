import React from 'react';
import { Button } from 'evergreen-ui';

import './CountrySelected.scss';

function CountrySelected({
    name, nativeName, population, region, subregion, capital,
    topLevelDomain, currencies = [], languages = [], flag, borders = [],
}) {

    return (
        <div className="country-selected">
            <div className="country-selected__flag">
                <img src={flag} alt={name}/>
            </div>
            <div className="country-selected__body">
                <h1 className="country-selected__title">{name}</h1>
                <div className="country-selected__info">
                    <ul>
                        <li>
                            <strong>Native Name: </strong>
                            {nativeName}
                        </li>
                        <li>
                            <strong>Population: </strong>
                            {population}
                        </li>
                        <li>
                            <strong>Region: </strong>
                            {region}
                        </li>
                        <li>
                            <strong>Sub Region: </strong>
                            {subregion}
                        </li>
                        <li>
                            <strong>Capital: </strong>
                            {capital}
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>Top Level Domain: </strong>
                            {topLevelDomain}
                        </li>
                        <li>
                            <strong>Currencies: </strong>
                            {currencies.map(({ name }) => (
                                <span key={name}>{name}</span>
                            ))}
                        </li>
                        <li>
                            <strong>Languages: </strong>
                            {languages.map(({ name }) => (
                                <span key={name}>{name}</span>
                            ))}
                        </li>
                    </ul>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <strong>Border Countries: </strong>
                    <ul style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        {borders.length > 0 && borders.map((item) => (
                            <li key={item}>
                                <Button marginLeft={10}>{item}</Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CountrySelected;