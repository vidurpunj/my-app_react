import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Burger/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Burger/Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <Sidedrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;