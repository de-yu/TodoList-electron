

import React from 'react';
import {Switch , Route} from 'react-router-dom';
import DayThing from './DayThing';
import FinishThing from './FinishThing';
import WaitThing from './WaitThing';
import Note from './Note';

export default class MainRoute extends React.Component
{
  constructor(props) {
    super()
  }
  render() {
    return (
    <Switch>
      <Route path="/" component={Note} />
      <Route path="/WaitThing" component={WaitThing} />
      <Route path="/FinishThing" component={FinishThing} />
      <Route path="/DayThing" component={DayThing} />
    </Switch>
    );
  }
}