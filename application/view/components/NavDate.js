
import React from 'react';
import {Link} from 'react-router-dom';

export default class NavDate extends React.Component
{
  constructor(props) {
    super()
  }
  render() {
      return(
              
    <div className="NavDate">
      <div className="Month-days">
        <div className="Month">
        <span>11</span>
        </div>
        <ul className="days">
            <li>1</li>
            <li>5</li>
            <li>10</li>
        </ul>
      </div>
    </div>
    )
  }
}