
import { BrowserRouter, Route , Link , Switch} from 'react-router-dom'
import { matchPath } from 'react-router'
import React from 'react';
import ReactDOM from "react-dom";

import NavBar from "./components/NavBar"
import NavDate from "./components/NavDate"
import MainRoute from "./components/MainRoute"

const App = () => (
     <div>
       <NavBar />
       <NavDate />
       <MainRoute />
     </div>
 );
        
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('body'))