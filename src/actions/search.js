import { SET_COUNTRY_BY_NAME } from '../actionTypes';

export const filterByName = (value) => ({
    type: SET_COUNTRY_BY_NAME,
    payload: value,
});