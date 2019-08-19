

import {combineReducers} from 'redux';

import ingredientsReducer from './ingReducer';

const rootReducer = combineReducers({

    ingredients: ingredientsReducer
    
})

export default rootReducer;