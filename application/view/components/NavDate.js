
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
    window.prompt("sometext","defaultText");
      this.props.newDate("123").then(function(data){
          console.log(data);
      })

  }
 allowDrop(ev)
  {
    console.log("allow");
          ev.preventDefault();
  }

  drag(ev)
  {
    console.log("drag");
          ev.dataTransfer.setData("Text",ev.target.id);
  }

  drop(ev)
  {
    
          ev.preventDefault();
          var data=ev.dataTransfer.getData("Text");
              console.log(data);
          ev.target.appendChild(document.getElementById(data));
  }
  render() {
      return(

    <NavCalendar >
      <DateControl >
        <NewDateButton onClick={ this.newDate.bind(this) } >
        NEW
        </NewDateButton>
        <DelDateButton  onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
        DEL
        </DelDateButton>
      </DateControl>
      <AllMonth>
      <Month>
        <MonthNum>
            <Num>11</Num>
        </MonthNum>
        <MonthDays>
        <Day  id = "a" draggable="true" onDragStart={this.drag.bind(this)}><DayLink to="/DayThing/11/1">1</DayLink></Day>
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