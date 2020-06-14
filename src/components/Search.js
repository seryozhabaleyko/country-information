import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchInput } from 'evergreen-ui';

import { filterByName } from '../actions/search';

import './Search.scss';

function Search() {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        dispatch(filterByName(value));
    };

    return (
        <SearchInput
            placeholder="Filter traits..."
            height={40}
            value={inputValue}
            onChange={handleChange}
        />
    );
}

export default Search;