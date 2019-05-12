
import { BrowserRouter, Route , Link , Switch , HashRouter} from 'react-router-dom'
import { matchPath } from 'react-router'
import React from 'react';
import ReactDOM from "react-dom";
import {createStore , applyMiddleware , combineReducers } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import CalendarReducer from "./reducers/CalendarReducer"
import NoteReducer from "./reducers/NoteReducer"
import DayThingReducer from "./reducers/DayThingReducer"

import NavBar from "./components/NavBar"
import NavDate from "./containers/CalendarContainer"
import MainRoute from "./components/MainRoute"

var reducer = combineReducers({
    Calendar: CalendarReducer 
    ,Note:NoteReducer
    ,DayThing:DayThingReducer
    });

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
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
), document.getElementById('body'));
