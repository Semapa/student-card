import React from 'react'
import { Route, Switch } from 'react-router'
import Card from './components/card'
import CreateCard from './components/createCard'

function App() {
  return (
    <Switch>
      <Route path="/create" component={CreateCard} />
      <Route path="/" exact component={Card} />
    </Switch>
  )
}

export default App
