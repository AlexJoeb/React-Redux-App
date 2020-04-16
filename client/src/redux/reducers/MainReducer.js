
import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_INGRED, REMOVE_INGRED, INC_PAGE, DEC_PAGE } from '../actions/MainActions';

const initState = {
    ingredients: [], // List of Ingredients to add.
    results: [],
    page: 1,
    loading: false,
    error: "",
}

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                results: action.payload
            }
        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_INGRED:
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.payload,
                ]
            }
        case REMOVE_INGRED:
            return {
                ...state,
                ingredients: state.ingredients.filter(item => item.toLowerCase() !== action.payload.toLowerCase())
            }
        case INC_PAGE:
            return {
                ...state,
                page: state.page + 1,
            }
        case DEC_PAGE:
            return {
                ...state,
                page: state.page - 1,
            }
        default:
            return state;    
    }
}