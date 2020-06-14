import React from 'react';

import CountryListContainer from '../containers/CountryListContainer';
import Search from '../components/Search';
import Filter from '../components/Filter';

function Home() {

    return (
        <main className="main">
            <div className="container">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '40px 0'
                }}>
                    <Search />
                    <Filter />
                </div>
                <CountryListContainer />
            </div>
        </main>
    );
}

export default Home;