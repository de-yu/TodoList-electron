
import React from 'react';
import NavDate from '../components/NavDate';
import {setDate , getDate , delDate , newDate}from '../actions/NavDate'
import { connect } from 'react-redux';


const mapStateToProps = state =>({date:state.Calendar.date});


const mapDispatchToProps = (dispatch , props) => ({
    newDate:function(date){
        return dispatch(newDate(date))
    },    
    getDate:function(){
        return dispatch(getDate())
    },
    delDate:function(date){
        return dispatch(delDate(date))
    },
    setDate:function(date){ 
        dispatch(setDate({
            date:date 
        })) },
    dispatch:dispatch
    }
);


var newNavDate = connect(mapStateToProps ,mapDispatchToProps )(NavDate);

export default newNavDate;