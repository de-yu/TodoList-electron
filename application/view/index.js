

import { BrowserRouter, Route , Link , Switch} from 'react-router-dom'
import { matchPath } from 'react-router'
import React from 'react';
import ReactDOM from "react-dom";
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import reducer from "./reducers/NoteReducer"
import NavBar from "./components/NavBar"
import NavDate from "./components/NavDate"
import MainRoute from "./components/MainRoute"

const store = createStore(reducer);

const App = () => (
     <div>
       <NavBar />
       <NavDate />
       <MainRoute />
     </div>
 );
        
ReactDOM.render((
 <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('body'))