import React, { useState } from 'react'

import { connect } from 'react-redux';

import { addIngredient, getFood } from '../redux/actions/MainActions'; 

const FormArea = ({ addIngredient, getFood }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => { e.preventDefault(); }

    return (
        <form onSubmit={handleSubmit}>
            <input className='input' type='text' value={value} onChange={e => setValue(e.target.value)} />
            <button color='primary' onClick={addIngredient}>Add Ingredient</button>
            <button color='primary' onClick={getFood}>Search</button>
        </form>
    )
}

const mapStateToProps = ({ loading }) => ({
    loading,
});

export default connect(mapStateToProps, { addIngredient, getFood })(FormArea);