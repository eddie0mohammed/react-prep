import React from 'react'

import {connect} from 'react-redux';
import * as actionCreators from '../../../actions/actionCreators';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';


const controls = [
    {label: "Meat", type: 'meat'},
    {label: "Cheese", type: 'cheese'},
    {label: "Salad", type: 'salad'},
    {label: "Bacon", type: 'bacon'},
]

const BuildControls = (props) => {

    const {meat, cheese, salad, bacon} = props.ingredients;
    
    const total = meat + cheese + salad + bacon
    // console.log(total);
    
    return (
        <div className={classes.BuildControls}>
            <div className={classes.price}>Total: ${props.price}</div>
            {controls.map((elem, i) => {
                return <BuildControl key={i} label={elem.label} />
            })}

            <button className={classes.OrderButton} disabled={total <= 0} onClick={props.showModal}>Order Now</button>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: () => dispatch(actionCreators.order_now()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls)
