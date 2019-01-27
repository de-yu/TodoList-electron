
import React from 'react';
import {NavCalendar , Month ,AllMonth, MonthNum , Num , MonthDays , Day , DayLink ,DateControl, NewDateButton , DelDateButton} from './StyleComponent/NavDate'
import ql from "./../../../application/models/main_graphql"

export default class NavDate extends React.Component
{
  constructor(props) {
    super(props)
  }
  componentWillMount ()
  {


  }
  newDate()
  {
      this.props.newDate("123").then(function(data){
          console.log(data);
      })

  }
  
  delDate()
  {
    this.props.delDate("123").then(function(data){
          console.log(data);
      })
  }
  render() {
      return(

    <NavCalendar>
      <DateControl>
        <NewDateButton onClick={ this.newDate.bind(this) } >
        NEW
        </NewDateButton>
        <DelDateButton onClick={this.delDate.bind(this)}>
        DEL
        </DelDateButton>
      </DateControl>
      <AllMonth>
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
      </AllMonth>
    </NavCalendar>
    )
  }
}