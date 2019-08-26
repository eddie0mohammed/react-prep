import React from 'react'

import classes from './Layout.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import * as actionCreators from '../../actions/actionCreators';

import {connect} from 'react-redux';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar toggleSideDrawer={props.toggleSideDrawer}/>
            <SideDrawer />

            <main className={classes.content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSideDrawer: () => dispatch(actionCreators.toggleSideDrawer()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
