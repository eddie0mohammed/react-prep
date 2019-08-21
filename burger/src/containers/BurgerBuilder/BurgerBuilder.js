import React, { Component } from 'react'

import {connect} from 'react-redux';

import BuildControls from '../../components/Burger/BuildControls.js/BuildControls';
import Burger from '../../components/Burger/Burger';
import Modal from '../../UI/Modal/Modal';
import Backdrop from '../../UI/Backdrop/Backdrop';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import * as actionCreators from '../../actions/actionCreators';

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         ingredients: {
    //             meat: 1,
    //             cheese: 0,
    //             bacon: 0,
    //             salad: 0,
    //         }
    //     }
    // }

    render() {
        const PRICES = {
            meat: 1.2,
            cheese: 0.5,
            bacon: 0.7,
            salad: 0.4
        }
        const {meat, cheese, bacon, salad, purchasing} = this.props.ingredients;
        let totalPrice = this.props.basePrice + (meat * PRICES.meat) + (cheese * PRICES.cheese) + (bacon * PRICES.bacon) + (salad * PRICES.salad);

        // console.log(totalPrice.toFixed(2));
        
        
    
        // console.log(this.props.ingredients)
        // console.log(this.props.basePrice);
        return (
            <React.Fragment>
                <Modal show={purchasing}><OrderSummary totalPrice={totalPrice}/></Modal>
                <Backdrop show={purchasing} clicked={this.props.closeModal}/>
                <Burger ingredients={this.props.ingredients} />
                <BuildControls price={totalPrice.toFixed(2)}/>
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        basePrice: state.ingredients.price
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(actionCreators.closeModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);