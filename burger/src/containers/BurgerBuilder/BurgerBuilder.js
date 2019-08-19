import React, { Component } from 'react'

import {connect} from 'react-redux';

import BuildControls from '../../components/Burger/BuildControls.js/BuildControls';
import Burger from '../../components/Burger/Burger';

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
        // console.log(this.props.ingredients)
        return (
            <React.Fragment>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls />
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(BurgerBuilder);