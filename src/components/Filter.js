import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Combobox } from 'evergreen-ui';

import { fetchFilterByRegion } from '../actions/filter';
import { fetchCountries } from '../actions/country';

function Filter() {

    const dispatch = useDispatch();
    const { isFetching } = useSelector((state) => state.filter);

    const handleChange = (selected) => {
        if (selected) {
            dispatch(fetchFilterByRegion(selected));
        } else {
            dispatch(fetchCountries());
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <Combobox
                openOnFocus
                height={40}
                items={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
                onChange={handleChange}
                placeholder="Filter by Region"
                isLoading={isFetching}
            />
        </div>
    );
}

export default Filter;