import React, { useEffect } from 'react'

import { connect } from 'react-redux';
import { removeIngredient } from '../redux/actions/MainActions';

import { Chip } from '@material-ui/core';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
 
export function IngredientList({ ingredients, removeIngredient }) {
    const handleDelete = (e, item) => {
        console.log(item);
        removeIngredient(item);
    }

    useEffect(() => {
     }, [ingredients])

    return (
        <div css={css`margin: 10px 0;`}>
            {ingredients.length > 0 ?
                ingredients.map((item, index) =>
                    <Chip css={css`&+&{margin-left: 10px;}`} label={item} onDelete={e => handleDelete(e, item)} key={index} />
                )
                : <p>No ingredients have been added yet. 🍉</p>
            }
        </div>
    )
}

export default connect(state => {
    return {
        ingredients: state.ingredients,
    }
}, {
    removeIngredient
})(IngredientList);