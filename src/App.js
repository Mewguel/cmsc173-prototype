import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import RegisterPantry from './components/registration/RegForm';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register-pantry" component={RegisterPantry}></Route>

      </Switch>
    </div>
  );
}

export default App;
