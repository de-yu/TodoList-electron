
import React from "react";
import DayThing from '../components/DayThing';
import {addDayThing , delDayThing  , setDayThing, getDayThingIdAsync ,getDayThingAsync ,addDayThingAsync , updateDayThingAsync , delDayThingAsync} from '../actions/DayThing'
import {connect} from 'react-redux'


const mapStateToProps = state => ({data:state.DayThing})

const mapDispatchToProps = (dispatch , props) => ({
    addDayThing:function(){dispatch(addDayThing())} ,
    delDayThing:function(){dispatch(delDayThing())},
    setDayThing:function(data){dispatch(setDayThing(data))},
    
    getDayThingIdAsync: function(date){
      return dispatch(getDayThingIdAsync(date))
    },
    getDayThingAsync: function(id){
      return dispatch(getDayThingAsync(id))
    },
    addDayThingAsync:function(){
        return dispatch(addDayThingAsync())
    },
    updateDayThingAsync:function(){
        return dispatch(updateDayThingAsync())        
    },
    delDayThingAsync:function(){
        return dispatch(delDayThingAsync())
    }
});


var newDayThing = connect(mapStateToProps, mapDispatchToProps)(DayThing);

export default newDayThing;