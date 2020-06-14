import React from 'react';
import { Alert, Pane, Spinner } from 'evergreen-ui';

import Country from './Country';

import './CountryList.scss';

function CountryList({ isFetching, items, itemsCount, errorMessage }) {

    return (
        <>
            {errorMessage && (
                <Alert
                    intent="danger"
                    title={errorMessage}
                />
            )}
            {isFetching && (
                <Pane display="flex" alignItems="center" justifyContent="center" height={300}>
                    <Spinner/>
                </Pane>
            )}
            <div className="country-list">
                {items.length > 0 && items.map((country) => (
                    <Country key={country.name} {...country} />
                ))}
            </div>
        </>
    );
}

export default CountryList;