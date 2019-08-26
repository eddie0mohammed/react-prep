import React from 'react'

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div onClick={props.toggleSideDrawer} className={classes.ToggleIcon}>Menu</div>
            <div className={classes.Logo}>
                <Logo/>
            </div>

            <nav className={classes.hide}>
                <NavigationItems />
            </nav>
            
        </header>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleSideDrawer: () => dispatch(actionCreators.toggleSideDrawer()),
//     }
// }

// export default connect(null, mapDispatchToProps)(Toolbar)
export default Toolbar
