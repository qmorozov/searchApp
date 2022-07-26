import { combineReducers } from 'redux'

import items from './items';
import searchQuery from "./searchQuery";

const rootReducer = combineReducers({
    items,
    searchQuery
})

export default rootReducer