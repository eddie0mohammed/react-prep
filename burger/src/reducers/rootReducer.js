

import {combineReducers} from 'redux';

import ingredientsReducer from './ingReducer';
import functionalityReducer from  './functionalityReducer';

const rootReducer = combineReducers({

    ingredients: ingredientsReducer,
    func: functionalityReducer,
    
})

export default rootReducer;