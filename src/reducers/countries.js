import {
    FILTER_BY_REGION_SUCCESS,
    GET_COUNTRIES_FAILURE,
    GET_COUNTRIES_REQUEST,
    GET_COUNTRIES_SUCCESS,
    SET_COUNTRY_BY_NAME,
} from '../actionTypes';

const initialState = {
    isFetching: false,
    countries: [],
    items: [],
    itemsCount: 0,
    errorMessage: null,
};

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_COUNTRIES_REQUEST:
            return { ...state, isFetching: true, errorMessage: null };
        case GET_COUNTRIES_SUCCESS:
        case FILTER_BY_REGION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                countries: payload,
                items: payload,
                itemsCount: payload.length,
            };
        case GET_COUNTRIES_FAILURE:
            return { ...state, isFetching: false, errorMessage: payload };

        case SET_COUNTRY_BY_NAME: {
            const countryListByName = state.countries.filter((country) =>
                country.name.toLowerCase().includes(payload.toLowerCase()));
            console.log(countryListByName);
            return { ...state, items: countryListByName };
        }

        default:
            return state;
    }

};