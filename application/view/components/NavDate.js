
/* global _ */

import React from 'react';
import {NavCalendar , Calendar, Year , YearNum , Month ,AllMonth, MonthNum , Num , MonthDays , Day , DayLink ,DateControl, DateInput , NewDateButton , DelDateButton} from './StyleComponent/NavDate'
import ql from "./../../../application/models/main_graphql"

export default class NavDate extends React.Component
{
  constructor(props) {
    super(props)
  }
  async componentDidMount ()
  {
    var date = await this.props.getDate();
    
    this.props.setDate(date);
   
  }
  newDate()
  {
      console.log(this.refs.dateInput.value);
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
      
  var cal = [];
  
  if(this.props.date!==null)
  {
        _.forEach(this.props.date , function(value_1 , key_1){
            var months = [];
            
            _.forEach(value_1 , function(value_2 , key_2){
   
                var days = []
                _.forEach(value_2 , function(value_3){
                     days.push(<Day key={value_3}><DayLink to={"/DayThing/"+[key_1,key_2,value_3].join("/")}>{value_3}</DayLink></Day>)
                }.bind(this))
                months.push(<Month key={key_2}><MonthNum>{key_2}</MonthNum><MonthDays>{days}</MonthDays></Month>)        
        
            }.bind(this))
            cal.push(<Year key={key_1}><YearNum>{key_1}</YearNum><AllMonth>{months}</AllMonth></Year>)
        
            })
        }

      return(

    <NavCalendar >
      <DateControl >
      <DateInput ref="dateInput" type="date" />
        <NewDateButton onClick={ this.newDate.bind(this) } >
        NEW
        </NewDateButton>
        <DelDateButton  onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
        DEL
        </DelDateButton>
      </DateControl>
      <Calendar>
      {cal}
      </Calendar>
    </NavCalendar>
    )
  }
}