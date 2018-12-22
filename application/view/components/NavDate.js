
import React from 'react';
import {NavCalendar , Month , MonthNum , Num , MonthDays , Day , DayLink} from './StyleComponent/NavDate'
import ql from "./../../../application/models/main_graphql"

export default class NavDate extends React.Component
{
  constructor(props) {
    super()
  }
  componentWillMount ()
  {
    ql(
     `{
      getDates
      }
    `).then(function(data)      {
            console.log(data);
      })


  }
  render() {
      return(
              
    <NavCalendar>
      <Month>
        <MonthNum>
            <Num>11</Num>
        </MonthNum>
        <MonthDays>
        <Day><DayLink to="/DayThing/11/1">1</DayLink></Day>
            <Day><DayLink to="/DayThing/11/1">5</DayLink></Day>
            <Day><DayLink to="/DayThing/11/1">10</DayLink></Day>
        </MonthDays>
      </Month>
      <Month>
        <MonthNum>
        <Num>12</Num>
        </MonthNum>
        <MonthDays>
            <Day>1</Day>
            <Day>5</Day>
            <Day>9</Day>
            <Day>12</Day>
            <Day>15</Day>
            <Day>20</Day>
           <Day>21</Day>
            <Day>25</Day>
            <Day>30</Day>
        </MonthDays>
      </Month>
    </NavCalendar>
    )
  }
}