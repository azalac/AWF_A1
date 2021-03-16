import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopList from './TopList/TopList';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import FavouriteList from './FavouriteList/FavouriteList';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/favourites" component={FavouriteList}></Route>
        <Route path="/" component={TopList}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
