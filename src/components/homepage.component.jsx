import React  from 'react';
import HeroComp from './hero.component/hero.component';
import About from './About';
import './hero.component/hero.style.css'
import { Switch, Route } from 'react-router-dom'

const HomePage = () => (
    <div>
        <Switch>
            <Route path='/' component={ HeroComp} exact/>
            <Route path='/about' component={ About} />   
        </Switch>
    </div>  
)

export default HomePage;