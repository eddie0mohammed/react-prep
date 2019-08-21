import * as actionTypes from '../actions/actions';

const initialState = {
   
        meat: 0,
        cheese: 0,
        salad: 0,
        bacon: 0, 
        price: 4,
        purchasing: false
}


const ingredientsReducer = (state = initialState, action) => {

    switch(action.type){

        case(actionTypes.ADD):
        // console.log(state.ingredients[action.payload]);
        // console.log(action.payload)
            return {
                ...state,
                [action.payload]: state[action.payload] + 1
                
            }
        
        case(actionTypes.REMOVE):
            return {
                ...state, 
                [action.payload]: state[action.payload] - 1
                
            }

        case(actionTypes.ORDER_NOW):
            return {
                ...state,
                purchasing: true
            }

        case(actionTypes.CLOSE_MODAL):
            return {
                ...state,
                purchasing: false
            }

        case(actionTypes.PURCHASE_CONTINUE):
            return {
                ...state,
                purchasing: false
            }
            
        default:
            return state
    }
}

export default ingredientsReducer;