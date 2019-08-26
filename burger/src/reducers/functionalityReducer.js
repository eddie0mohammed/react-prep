
import * as actionTypes from '../actions/actions';

const initialState = {
    showSideDrawer: true
}

const functionalityReducer = (state = initialState, action) => {
    
    switch(action.type){
        
        case(actionTypes.CLOSE_SIDEDRAWER):
            return {
                ...state, 
                showSideDrawer: false
            }
        
        case(actionTypes.TOGGLE_SIDEDRAWER):
            return {
                ...state,
                showSideDrawer: !state.showSideDrawer
            }


        default:
            return state;
    }
}

export default functionalityReducer;