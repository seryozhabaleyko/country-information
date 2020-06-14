import { FILTER_BY_REGION_FAILURE, FILTER_BY_REGION_REQUEST, FILTER_BY_REGION_SUCCESS } from '../actionTypes';
import { defaultErrorMessage } from '../constants';
import Api from '../api';

const filterByRegionRequest = () => ({
    type: FILTER_BY_REGION_REQUEST,
});

const filterByRegionSuccess = (counters) => ({
    type: FILTER_BY_REGION_SUCCESS,
    payload: counters,
});

const filterByRegionFailure = (errorMessage = defaultErrorMessage) => ({
    type: FILTER_BY_REGION_FAILURE,
    payload: errorMessage,
    error: true,
});

export const fetchFilterByRegion = (region) => async (dispatch) => {

    dispatch(filterByRegionRequest());

    try {
        const response = await Api.get(`/region/${region}`);
        dispatch(filterByRegionSuccess(response.data));
    } catch (error) {
        dispatch(filterByRegionFailure(error.response.data.message));
    }
};