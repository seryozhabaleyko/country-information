import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CountryList from '../components/CountryList';
import { fetchCountries } from '../actions/country';
import { getCountriesSelector } from '../selector';

function CountryListContainer({ fetchCountries, country }) {

    useEffect(() => {
        if (!country.items.length) {
            fetchCountries();
        }
    }, [fetchCountries, country.items]);

    return <CountryList {...country} />;
}

const mapStateToProps = (state) => ({
    country: getCountriesSelector(state),
});

const mapDispatchToProps = {
    fetchCountries,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryListContainer);