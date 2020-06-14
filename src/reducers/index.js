import { combineReducers } from 'redux';

import country from './country';
import countries from './countries';
import filter from './filter';

const rootReducer = combineReducers({
    country,
    countries,
    filter,
});

export default rootReducer;