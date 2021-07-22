import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const Router = () => {
    // if (vlu == 0) {}
    // console.log(mnustat)

    return (
        <>
        <Navbar />

        <Switch>
            <div className="apbdy">
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </div>
        </Switch>

        <Footer />
        </>
    )
}

export default Router
