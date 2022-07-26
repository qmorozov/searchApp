const initialState = {
    items: [],
    isLoaded: false
};

const items = (state = initialState, action) => {
    if (action.type === 'SET_ITEMS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: action.payload
        };
    };
    if (action.type === 'SET_LOADED') {
        return {
            ...state,
            isLoaded: action.payload
        }
    }
    return state;
};

export default items;