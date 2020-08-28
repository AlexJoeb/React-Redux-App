import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const ADD_INGRED = 'ADD_INGRED';
export const REMOVE_INGRED = 'REMOVE_INGRED';

export const INC_PAGE = 'INC_PAGE';
export const DEC_PAGE = 'DEC_PAGE';

export const getFood = data => dispatch => {
    dispatch({ type: FETCH_START });

}

export const addIngredient = value => {
    return { type: ADD_INGRED, payload: value };
}

export const removeIngredient = value => {
    return { type: REMOVE_INGRED, payload: value };
}

export const incrementPage = () => dispatch => {
    dispatch({ type: INC_PAGE });
}

export const decrementPage = () => dispatch => {
    dispatch({ type: DEC_PAGE });
}

export const fetchResults = () => (dispatch, getState) => {
    console.log("FETCHING");
    dispatch({ type: FETCH_START });
    const { page, ingredients } = getState();
    const ingredStringList = ingredients.map(item => item.replace(" ", "_")).join(",");
    axios.get(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${ingredStringList}&p=${page}`, {
        headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        })
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data.results })
            
        })
        .catch(err => {
            dispatch({ type: FETCH_FAIL, payload: err.message });
        })
}