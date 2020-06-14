import {
    GET_COUNTRIES_FAILURE,
    GET_COUNTRIES_REQUEST,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRY_FAILURE,
    GET_COUNTRY_REQUEST,
    GET_COUNTRY_SUCCESS,
} from '../actionTypes';
import { defaultErrorMessage } from '../constants';
import Api from '../api';

const countriesRequest = () => ({
    type: GET_COUNTRIES_REQUEST,
});

const countriesSuccess = (country) => ({
    type: GET_COUNTRIES_SUCCESS,
    payload: country,
});

const countriesFailure = (errorMessage = defaultErrorMessage) => ({
    type: GET_COUNTRIES_FAILURE,
    payload: errorMessage,
});

export const fetchCountries = () => async (dispatch) => {

    dispatch(countriesRequest());

    try {
        const response = await Api.get('/all');
        dispatch(countriesSuccess(response.data));
    } catch (error) {
        dispatch(countriesFailure(error.message));
    }

};

const countryRequest = () => ({
    type: GET_COUNTRY_REQUEST,
});

const countrySuccess = (country) => ({
    type: GET_COUNTRY_SUCCESS,
    payload: country,
});

const countryFailure = (errorMessages = defaultErrorMessage) => ({
    type: GET_COUNTRY_FAILURE,
    payload: errorMessages,
});

export const fetchCountry = (slug) => async (dispatch) => {

    dispatch(countryRequest());

    try {
        const response = await Api.get(`/name/${slug}?fullText=true`);
        dispatch(countrySuccess(response.data));
    } catch (error) {
        dispatch(countryFailure(error.message));
    }

};