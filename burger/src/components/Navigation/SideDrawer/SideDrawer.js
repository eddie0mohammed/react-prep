import React from 'react'

import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';

import * as actionCreators from '../../../actions/actionCreators';

import {connect} from 'react-redux';

const SideDrawer = (props) => {

  

    return (

        <React.Fragment>
            
            <div className={classes.Backdrop}>
                <Backdrop show={props.showSideDrawer} clicked={props.closeSideDrawer} />
            </div>

            <div className={classes.SideDrawer}>

                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems />
                </nav>
                
            </div>
           
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        showSideDrawer: state.func.showSideDrawer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSideDrawer: () => dispatch(actionCreators.closeSideDrawer()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)
