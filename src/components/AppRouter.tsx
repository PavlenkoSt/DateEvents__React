import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import router from '../router'

const AppRouter = () => {

    const isAuth = false

    return (
        <>
            { isAuth 
                ? <Switch>
                    { router.auth.map(route => <Route { ...route } key={route.path} />) }
                    <Redirect to='/' />
                </Switch>
                : <Switch>
                    { router.noAuth.map(route => <Route { ...route } key={route.path} />) }
                    <Redirect to='/login' />
                </Switch>
            }
        </>
    )
}

export default AppRouter
