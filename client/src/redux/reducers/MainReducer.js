const initState = {
    ingrediants: [], // List of Ingrediants to add.
    page: 1,
    loading: false,
}

export default (state = initState, action) => {
    switch(action.type){
        default:
            return state;    
    }
}