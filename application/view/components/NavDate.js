
/* global _ */

import React from 'react';
import {NavCalendar, Calendar, Year, YearNum, Month, AllMonth, MonthNum, Num, MonthDays, Day, DayLink, DateControl, DateInput, NewDateButton, DelDateButton} from './StyleComponent/NavDate'
import ql from "./../../../application/models/main_graphql"

export default class NavDate extends React.Component{
    constructor (props){
        super(props)
    }
    async componentDidMount (){
        var date = await this.props.getDate();

        this.props.setDate(date);

    }
    newDate (){
        this.props.newDateAsync(this.refs.dateInput.value).then(function(data){
            console.log(data);
        })
        this.props.newDate(this.refs.dateInput.value);
    }
    allowDrop (ev){
        console.log("allow");
        ev.preventDefault();
    }
    drag (ev){
        console.log("drag");
        ev.dataTransfer.setData("Text", ev.target.id);
    }
    drop (ev){
        ev.preventDefault();
        var date = ev.dataTransfer.getData("Text");
       this.props.delDateAsync(date).then(function(data){
            console.log(data);
        })
        this.props.delDate(date)
    }
  render() {
      
  var cal = [];
  
  if(this.props.date!==null)
  {

      var group = _.groupBy(this.props.date , function(val){
          return val.substring(0,4)
      })
      _.forEach(group , function(value , key){
          group[key] = _.groupBy(value , function(val){
              return val.substring(5,7);
          })
      })
    
    _.forEach(group , function(value_1 , key_1){
        var months = [];
        var months_keys = Object.keys(value_1).sort();
         for (var i = 0; i < months_keys.length; i++) {
             var value_2 = value_1[months_keys[i]]
             var days = []
             _.forEach( value_2 , function(value_3){
                 days.push(<Day id={value_3} key={value_3} draggable="true" onDragStart={this.drag.bind(this)}><DayLink id={value_3} to={"/DayThing/"+value_3.replace(/-/g , "/")}>{value_3.substring(8,10)}</DayLink></Day>)
            }.bind(this))
            months.push(<Month key={months_keys[i]}><MonthNum>{months_keys[i]}</MonthNum><MonthDays>{days}</MonthDays></Month>)       
         }
         
        cal.push(<Year key={key_1}><YearNum>{key_1}</YearNum><AllMonth>{months}</AllMonth></Year>)
        }.bind(this))
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