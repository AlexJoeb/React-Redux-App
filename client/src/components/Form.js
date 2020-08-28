import React, { Fragment, useState } from 'react'

import { connect } from 'react-redux';

import { addIngredient, fetchResults } from '../redux/actions/MainActions'; 

import { TextField, Button } from '@material-ui/core';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
 

const FormArea = ({ ingredients, addIngredient, fetchResults }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submitted.");
    }

    const handleAddIngredient = () => {
        if (value.trim() === "") return;
        addIngredient(value);
        setValue("");
    }

    const handleFetchResults = () => {
        if (ingredients.length <= 0) return;
        else {
            return fetchResults();
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <TextField type='text' variant="outlined" label="Add Ingredient 🍅" value={value} onChange={e => setValue(e.target.value)} /><br/>
                <Button css={css`margin-top: 15px;`} variant="contained" color='primary' onClick={handleAddIngredient}>Add Ingredient</Button>
            </form>
            <Button css={css`margin: 10px 0;`} variant="contained" color='secondary' onClick={() => handleFetchResults()}>Search</Button>
        </Fragment>
    )
}

const mapStateToProps = ({ loading, ingredients }) => ({
    loading,
    ingredients
});

export default connect(mapStateToProps, { addIngredient, fetchResults })(FormArea);