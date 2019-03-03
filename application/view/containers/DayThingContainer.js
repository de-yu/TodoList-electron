
import React from "react";
import DayThing from '../components/DayThing';
import {addDayThing, delDayThing, setDayThing, updateDayThing, getDayThingIdAsync, getDayThingAsync, addDayThingAsync, updateDayThingAsync, delDayThingAsync} from '../actions/DayThing'
import {connect} from 'react-redux'


const mapStateToProps = state => ({data: state.DayThing})

const mapDispatchToProps = (dispatch, props) => ({
        addDayThing: function (id){
            dispatch(addDayThing({id: id}))
        },
        delDayThing: function (id){
            dispatch(delDayThing({id: id}))
        },
        setDayThing: function (data){
            dispatch(setDayThing(data))
        },
        updateDayThing: function (id, thing){
            dispatch(updateDayThing({id: id, thing: thing}))
        },
        getDayThingIdAsync: function (date){
            return dispatch(getDayThingIdAsync(date))
        },
        getDayThingAsync: function (id){
            return dispatch(getDayThingAsync(id))
        },
        addDayThingAsync: function (date){
            return dispatch(addDayThingAsync(date))
        },
        updateDayThingAsync: function (id, thing){
            return dispatch(updateDayThingAsync(id, thing))
        },
        delDayThingAsync: function (date, id){
            return dispatch(delDayThingAsync(date, id))
        }
    });


var newDayThing = connect(mapStateToProps, mapDispatchToProps)(DayThing);

export default newDayThing;