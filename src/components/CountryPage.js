import React from 'react';

import CountrySelected from './CountrySelected';
import Back from './Back';

import './CountryPage.scss';
import { Alert, Pane, Spinner } from 'evergreen-ui';

function CountryPage({ isFetching, country, errorMessage }) {

    return (
        <main className="main">
            <div className="container">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '40px 0',
                }}>
                    <Back/>
                </div>
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
                {!isFetching && !errorMessage && (
                    <CountrySelected {...country} />
                )}
            </div>
        </main>
    );
}

export default CountryPage;