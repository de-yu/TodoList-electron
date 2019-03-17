

import React from 'react';
import {Switch , Route} from 'react-router-dom';
import DayThing from '../containers/DayThingContainer';
import FinishThing from './FinishThing';
import WaitThing from './WaitThing';
import Note from '../containers/NoteContainer';

export default class MainRoute extends React.Component
{
  constructor(props) {
    super()
  }
  render() {
    return (
    <Switch>
      <Route path="/Note" component={Note} />
      <Route path="/WaitThing" component={WaitThing} />
      <Route path="/FinishThing" component={FinishThing} />
      <Route path="/DayThing/:Year/:Month/:Day" render = {(props) => (
            <DayThing key={location.href} {...props} />)
          } />
      <Route component={Note} />
    </Switch>
    );
  }
}