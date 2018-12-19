
import { BrowserRouter, Route , Link , Switch , HashRouter} from 'react-router-dom'
import { matchPath } from 'react-router'
import React from 'react';
import ReactDOM from "react-dom";

import NavBar from "./components/NavBar"
import NavDate from "./components/NavDate"

const App = () => (
     <div>
       <NavBar />
       <NavDate />
     </div>
 );
        
ReactDOM.render((
 <App />
), document.getElementById('body'))