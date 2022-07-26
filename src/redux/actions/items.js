import axios from 'axios';

export const setItems = items => ({
    type: 'SET_ITEMS',
    payload: items
});

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchItems = (searchQuery) => (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://google-web-search.p.rapidapi.com',
        params: {query: searchQuery, max: '300'},
        headers: {
            'X-RapidAPI-Key': '43a2b700fdmsha705495af4bf32dp12c4cajsnaa5ee3d9f709',
            'X-RapidAPI-Host': 'google-web-search.p.rapidapi.com'
        }
    };

    axios.request(options).then(response => {
        console.log(response.data);
        dispatch(setItems(response.data));
    }).catch(error => {
        console.error(error);
    });
};