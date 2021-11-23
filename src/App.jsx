import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import welcome from './components/welcome'

const App = ()=>{
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={welcome}></Route>
      </Switch>
    </HashRouter>
  )
}

export default App