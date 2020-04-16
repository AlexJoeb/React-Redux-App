import React from 'react'

import { connect } from 'react-redux';
import { incrementPage, decrementPage, fetchResults } from '../redux/actions/MainActions';


export function Controls({ page, incrementPage, decrementPage, fetchResults }) {

    const handleIncrement = () => {
        incrementPage();
        fetchResults();
    }

    const handleDecrement = () => {
        decrementPage();
        fetchResults();
    }

    return (
        <div>
            <button onClick={page >= 2 ? () => handleDecrement() : null}>{"◀"}</button>
            &nbsp;<span>{page}</span>&nbsp;
            <button onClick={() => handleIncrement()}>{"▶"}</button>
        </div>
    )
}

export default connect(state => ({
    page: state.page
}), {
    incrementPage, decrementPage, fetchResults
})(Controls);
