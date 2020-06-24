import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withContext } from '../AppContext';

function ProtectedRoute(props) {
    const { component: Component, token, ...rest } = props;
    return (
        token ?
        <Route {...rest} component={Component} /> :
        <Redirect to='/login' />
    )
}

export default withContext(ProtectedRoute);