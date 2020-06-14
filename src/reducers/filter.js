import { FILTER_BY_REGION_FAILURE, FILTER_BY_REGION_REQUEST, FILTER_BY_REGION_SUCCESS } from '../actionTypes';

const initialState = {
    isFetching: false,
    errorMessage: null,
};

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case FILTER_BY_REGION_REQUEST:
            return { ...state, isFetching: true, errorMessage: null };
        case FILTER_BY_REGION_SUCCESS:
            return { ...state, isFetching: false };
        case FILTER_BY_REGION_FAILURE:
            return { ...state, isFetching: false, errorMessage: payload };
        default:
            return state;
    }

};