
import * as actionTypes from './actions';


export const add = (ingredient) => {
    return {
        type: actionTypes.ADD,
        payload: ingredient
    }
}

export const remove = (ingredient) => {
    return {
        type: actionTypes.REMOVE,
        payload: ingredient
    }
}