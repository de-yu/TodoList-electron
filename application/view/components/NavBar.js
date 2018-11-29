
import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component
{
  constructor(props) {
    super()
  }
  render() {
    <div className="NavBar">
      <ul>
        <li><Link to="/Note">記事本</Link></li>
        <li><Link to="/WaitThing">待完成</Link></li>
        <li><Link to="/FinishThing">已完成</Link></li>
      </ul>
    </div>
  }
}