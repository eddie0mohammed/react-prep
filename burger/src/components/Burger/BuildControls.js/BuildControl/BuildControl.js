import React from 'react'

import {connect} from 'react-redux';

import classes from './BuildControl.module.css';
import * as actionCreators from '../../../../actions/actionCreators';

const BuildControl = (props) => {

    
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={() => props.remove(props.label.toLowerCase())} disabled={props.ingredients[props.label.toLowerCase()] === 0}>Less</button>
            <button className={classes.More} onClick={() => props.add(props.label.toLowerCase())} >More</button>
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
        add: (ing) => dispatch(actionCreators.add(ing)),
        remove: (ing) => dispatch(actionCreators.remove(ing)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BuildControl)
