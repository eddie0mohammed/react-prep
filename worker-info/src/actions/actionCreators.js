

import * as actionTypes from './actionTypes';
import axios from 'axios';


export const fetch_all_orders = () => {
    return async dispatch => {
        const response = await axios.get('https://www.hatchways.io/api/assessment/work_orders');

        dispatch(fetchOrder(response.data));

    }
}

const fetchOrder = (payload) => {
    return {
        type: actionTypes.FETCH_ALL_ORDERS,
        payload: payload
    }
}


export const fetch_all_workers = (usersArr) => {

    return async dispatch => {
        let allWorkers = [];
        usersArr.map(async user => {
            const response = await axios.get(` https://www.hatchways.io/api/assessment/workers/${user}`);
            // console.log(response.data.worker)
            allWorkers.push(response.data.worker)
        })
        
        
        await dispatch(fetchWorker(allWorkers));

    }
}

const fetchWorker = (payload) => {
    return {
        type: actionTypes.FETCH_ALL_WORKERS,
        payload: payload
    }
}