import React from 'react';
import { useHistory } from 'react-router-dom';
import { BackButton } from 'evergreen-ui';

function Back() {

    const history = useHistory();

    return (
        <BackButton
            height={40}
            onClick={() => history.goBack()}
        />
    );
}

export default Back;