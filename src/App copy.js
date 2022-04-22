import React from 'react'
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from './About';
import Address from './Address';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/address/4'>Address</Link>

      <Switch>
        <Route path='/about' component={About} />

        <Route
          path="/contact"
          render={(props) => {
            return <Contact {...props} name='raj' />;
          }}
        />

        <Route path='/address/:id' component={Address} />

        <Route exact path='/'>
          <Home name='raj' />
        </Route>
        <Route path='*' component={Error} />
      </Switch>

    </BrowserRouter>
  )
}

export default App