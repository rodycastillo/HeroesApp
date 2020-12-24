import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MarvelScreen} from '../components/marvel/MarvelScreen.js'
import {Navbar} from '../components/ui/Navbar.js'
import {HeroScreen} from '../components/heroes/HeroScreen.js'
import {DcScreen} from '../components/dc/DcScreen.js'
import { SearchScreen } from '../components/search/SearchScreen.js'

export const DashboardRoutes = () => {
    return (
        <>
          <Navbar/> 

          <div className="container mt-2"> 
              <Switch>
                  <Route exact path="/marvel" component={ MarvelScreen } />
                  <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                  <Route exact path="/dc" component={ DcScreen } />
                  <Route exact path="/search" component={ SearchScreen } />

                  <Redirect to="/marvel"/>
              </Switch>
          </div>
        </>
    )
}
