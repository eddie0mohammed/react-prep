
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    // name: 'john doe',
    // description: 'description',
    // picture: 'picture',
    // employee: 'employee',
    // email: 'email',
    // deadline: 'deadline'
    allOrders: null,
    allEmployees: null
}

const appReducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.FETCH_ALL_ORDERS:
            return {
                ...state,
                allOrders: action.payload
            }


        default:
            return state
    }
}

export default appReducer;