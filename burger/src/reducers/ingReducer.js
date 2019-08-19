import * as actionTypes from '../actions/actions';

const initialState = {
   
        meat: 1,
        cheese: 1,
        salad: 1,
        bacon: 1
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

        default:
            return state
    }
}

export default ingredientsReducer;