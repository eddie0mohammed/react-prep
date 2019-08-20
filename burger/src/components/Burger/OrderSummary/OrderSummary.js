import React from 'react'

import {connect} from 'react-redux';

const OrderSummary = (props) => {

    // const {meat, salad, cheese, bacon} = props.ingredients;
    const {price, purchasing, ...ingredientsArray} = props.ingredients;

    const ingArray = Object.entries(ingredientsArray);
    // console.log(Object.entries(ingredientsArray));

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {/* <li>Meat: {meat} {meat > 1 ? ' pcs' : ' pc'}</li>
                <li>Cheese: {cheese} {cheese > 1 ? ' pcs' : ' pc'}</li>
                <li>Salad: {salad} {salad > 1 ? ' pcs' : ' pc'}</li>
                <li>Bacon: {bacon} {bacon > 1 ? ' pcs' : ' pc'}</li> */}
                {ingArray.map((elem, i) => {
                    return <li key={i} style={{textTransform: 'capitalize'}}>{elem[0]}: {elem[1]} {elem[1] > 1 ? ' pcs' : ' pc'}</li>
                })}
            </ul>
            <p>Continue to Checkout?</p>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(OrderSummary)
