
import React from "react";
import DayThing from '../components/DayThing';
import {addDayThing , delDayThing  , setDayThing, getDayThingIdAsync ,getDayThingAsync ,addDayThingAsync , updateDayThingAsync , delDayThingAsync} from '../actions/DayThing'
import {connect} from 'react-redux'


const mapStateToProps = state => ({data:state.DayThing})

const mapDispatchToProps = (dispatch , props) => ({
    addDayThing:function(id){dispatch(addDayThing({id:id}))} ,
    delDayThing:function(){dispatch(delDayThing())},
    setDayThing:function(data){dispatch(setDayThing(data))},
    
    getDayThingIdAsync: function(date){
      return dispatch(getDayThingIdAsync(date))
    },
    getDayThingAsync: function(id){
      return dispatch(getDayThingAsync(id))
    },
    addDayThingAsync:function(date){
        return dispatch(addDayThingAsync(date))
    },
    updateDayThingAsync:function(id , thing){
        return dispatch(updateDayThingAsync(id , thing))        
    },
    delDayThingAsync:function(){
        return dispatch(delDayThingAsync())
    }
});


var newDayThing = connect(mapStateToProps, mapDispatchToProps)(DayThing);

export default newDayThing;