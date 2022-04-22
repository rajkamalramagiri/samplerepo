import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Cricket from './Cricket';
import ErrorPage from './ErrorPage';
import Football from './Football';
import Home from './Home';
import Tennis from './Tennis';

function App() {
  return (
    <Router>
      <div>App</div>
      <div>Nav Bar
        <Link to='/'>Home</Link>
        <Link to='/cricket'>Cricket Game</Link>{`  `}
        <Link to='/football'>Football</Link>{`  `}
        <Link to='/tennis'>Tennis</Link>{`  `}
      </div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/cricket' component={Cricket} />


        <Route
          path="/football"
          render={(props) => {
            return <Football {...props} />;
          }}
        />

        <Route
          path="/tennis"
          render={(props) => {
            return <Tennis {...props} name='raj' />;
          }}
        />

        <Route path='*'>
          <ErrorPage />
        </Route>

      </Switch>
    </Router>
  )
}

export default App