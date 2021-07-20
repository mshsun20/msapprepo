import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

const Router = () => {
    return (
        <>
        <Navbar />

        <Switch>
            <Route path='/' component={Home} />
        </Switch>

        <Footer />
        </>
    )
}

export default Router
