import React from 'react'
import classes from './Layout.module.scss';

const Layout = (props) => {
    return (
        <React.Fragment>
            <div>
                Toolbar
                SideDrawer
                Backdrop
            </div>

            <main className={classes.content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout
