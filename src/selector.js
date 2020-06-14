import { createSelector } from 'reselect';

const countryIsFetching = (state) => state.country.isFetching;
const countryData = (state) => state.country.data;
const countryErrorMessage = (state) => state.country.errorMessage;

export const getCountrySelector = createSelector(
    countryIsFetching,
    countryData,
    countryErrorMessage,
    (isFetching, country, errorMessage) => ({
        isFetching, country, errorMessage,
    }),
);

const countriesIsFetching = (state) => state.countries.isFetching;
const countriesItems = (state) => state.countries.items;
const countriesItemsCount = (state) => state.countries.itemsCount;
const countriesErrorMessage = (state) => state.countries.errorMessage;

export const getCountriesSelector = createSelector(
    countriesIsFetching,
    countriesItems,
    countriesItemsCount,
    countriesErrorMessage,
    (isFetching, items, itemsCount, errorMessage) => ({
        isFetching, items, itemsCount, errorMessage,
    }),
);