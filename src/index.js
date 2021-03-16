import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopList from './TopList/TopList';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Switch, HashRouter } from 'react-router-dom';
import FavouriteList from './FavouriteList/FavouriteList';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        <Route exact path="/favourites" component={FavouriteList}></Route>
        <Route exact path="/" component={TopList}></Route>
    </HashRouter>
    <div id="Author-Overlay">
      Austin Zalac 7900020
      <br></br>
      <a href="https://azalac.github.io/AWF_A1/#/">Github Pages</a>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
