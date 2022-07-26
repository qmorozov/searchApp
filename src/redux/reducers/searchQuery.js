const initialState = {
    query: ''
};

const searchQuery = (state = initialState, action) => {
    if (action.type === 'SET_SEARCH_QUERY') {
        return {
            ...state,
            query: action.payload
        };
    };
    return state;
};

export default searchQuery;