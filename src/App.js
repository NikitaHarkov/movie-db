import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useGlobalContext } from './context';

import Home from './Home';
import Movie from './SingleMovie';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/movies/:id' children={<Movie />} />
    </Switch>
  );
}

export default App;
