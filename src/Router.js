import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const Router = () => {
    return (
        <>
        <Navbar />

        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' components={About} />
            <Route path='/contact' components={Contact} />
        </Switch>

        <Footer />
        </>
    )
}

export default Router
