import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CountryPage from '../components/CountryPage';
import { fetchCountry } from '../actions/country';
import { getCountrySelector } from '../selector';

function CountryPageContainer({ match, fetchCountry, country }) {

    const { slug } = match.params;

    useEffect(() => {
        fetchCountry(slug);
    }, [fetchCountry, slug])

    return <CountryPage {...country} />;
}

const mapStateToProps = (state) => ({
    country: getCountrySelector(state),
});

const mapDispatchToProps = {
    fetchCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryPageContainer);