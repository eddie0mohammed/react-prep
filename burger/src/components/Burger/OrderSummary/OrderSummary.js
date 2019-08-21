import React from 'react'

import {connect} from 'react-redux';

import * as actionCreators from '../../../actions/actionCreators';
import Button from '../../../UI/Button/Button';

const OrderSummary = (props) => {

    const {totalPrice} = props;
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
            <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.closeModal} btnType="Danger">Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
            {/* <button onClick={props.closeModal}>Cancel</button>
            <button>Continue</button> */}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(actionCreators.closeModal()),
        purchaseContinue: () => dispatch(actionCreators.purchaseContinue()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary)
