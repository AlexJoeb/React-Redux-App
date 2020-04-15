import axios from 'axios';

export const FETCH_START = 'FETCH_DR_START';
export const FETCH_SUCCESS = 'FETCH_DR_SUCCESS';
export const FETCH_FAIL = 'FETCH_DR_FAIL';

export const ADD_INGRED = 'ADD_INGRED';

export const getFood = data => dispatch => {
    dispatch({ type: FETCH_START });
    
}

export const addIngredient = value => {
    return { type: ADD_INGRED, payload: value };
}