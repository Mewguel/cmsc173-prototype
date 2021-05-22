import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import About from './components/about';
import Map from './components/map';
import NavigationBar from './components/navbar';
import Register from './components/register';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavigationBar/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/map" component={Map}/>
        <Route path="/register" component={Register}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
