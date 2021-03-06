
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


export const order_now = () => {
    return {
        type: actionTypes.ORDER_NOW
    }
}


export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL
    }
}

export const purchaseContinue = () => {
    return {
        type: actionTypes.PURCHASE_CONTINUE
    }
}

export const closeSideDrawer = () => {
    return {
        type: actionTypes.CLOSE_SIDEDRAWER
    }
}

export const toggleSideDrawer = () => {
    return {
        type: actionTypes.TOGGLE_SIDEDRAWER
    }
}