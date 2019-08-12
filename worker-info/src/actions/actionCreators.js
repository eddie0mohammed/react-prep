

import * as actionTypes from './actionTypes';
import axios from 'axios';


export const fetch_all_orders = () => {
    return async dispatch => {
        const response = await axios.get(' https://www.hatchways.io/api/assessment/work_orders');

        dispatch(fetch(response.data));

    }
}

const fetch = (payload) => {
    return {
        type: actionTypes.FETCH_ALL_ORDERS,
        payload: payload
    }
}