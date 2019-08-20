import React from 'react'

import {connect} from 'react-redux';

import * as actionCreators from '../../actions/actionCreators';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {

    const {show} = props;

    return (
        show ? 
        <div className={classes.Backdrop} onClick={props.closeModal}>
 
        </div>

        : null
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(actionCreators.closeModal()),
    }
}

export default connect(null, mapDispatchToProps)(Backdrop)
