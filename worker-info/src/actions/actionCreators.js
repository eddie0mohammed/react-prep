

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
        // let promises = []; // array with all the promises
        
        /* WRONG
        usersArr.map(async user => {
            const response = await axios.get(` https://www.hatchways.io/api/assessment/workers/${user}`);
            console.log(response.data.worker)
            allWorkers.push(response.data.worker)
        }) */
        // WRONG


        //  for loop 
        for (let i = 0; i < usersArr.length; i++) {
            const response = await axios.get(` https://www.hatchways.io/api/assessment/workers/${usersArr[i]}`);
            // console.log(response.data.worker)
            allWorkers.push(response.data.worker)
        }
        // console.log("all worker -> ")
        // console.log(allWorkers)
        

        // // promise all 
        // usersArr.forEach(user => promises.push(axios.get(` https://www.hatchways.io/api/assessment/workers/${user}`)))
        // allWorkers = (await Promise.all(promises)).map(axioRet => axioRet.data.worker);

        // console.log(allWorkers)
        await dispatch(fetchWorker(allWorkers));
    }
}

const fetchWorker = (payload) => {
    return {
        type: actionTypes.FETCH_ALL_WORKERS,
        payload: payload
    }
}