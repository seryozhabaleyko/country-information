import { GET_COUNTRY_FAILURE, GET_COUNTRY_REQUEST, GET_COUNTRY_SUCCESS } from '../actionTypes';

const initialState = {
    isFetching: false,
    data: {},
    errorMessage: null,
};

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_COUNTRY_REQUEST:
            return { ...state, isFetching: true, errorMessage: null };
        case GET_COUNTRY_SUCCESS:
            return { ...state, isFetching: false, data: payload[0] };
        case GET_COUNTRY_FAILURE:
            return { ...state, isFetching: false, errorMessage: payload };
        default:
            return state;
    }

};