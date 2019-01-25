
import React from 'react';
import NavDate from '../components/NavDate';
import {setDate , getDate , delDate , newDate}from '../actions/NavDate'
import { connect } from 'react-redux';


const mapStateToProps = state =>({date:state.date});


const mapDispatchToProps = (dispatch , props) => ({
    newDate:function(){
        return dispatch(newDate())
    },    
    getDate:function(){
        return dispatch(getDate())
    },
    delDate:function(){
        return dispatch(delDate())
    },
    setDate:function(date){ 
        dispatch(setDate({
            date:date 
        })) },
    dispatch:dispatch
    }
);


var NavDate = connect(mapStateToProps ,mapDispatchToProps )(NavDate);

export default NavDate;