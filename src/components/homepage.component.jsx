import React  from 'react';
import HeroComp from './hero.component/hero.component';
import About from './About';
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'

const HomePage = () => (
    <div>
        <Navbar />
        <Switch>
            <Route path='/' component={ HeroComp} exact/>
            <Route path='/about' component={ About} />   
        </Switch>
    </div>  
)

export default HomePage;