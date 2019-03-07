
import React from 'react';
import NavDate from '../components/NavDate';
import {setDate, delDate, newDate, getDateAsync, delDateAsync, newDateAsync} from '../actions/NavDate'
        import { connect } from 'react-redux';


const mapStateToProps = state => ({date: state.Calendar.date});


const mapDispatchToProps = (dispatch, props) => ({
        getDate: function (){
            return dispatch(getDateAsync())
        },
        newDateAsync: function (date){
            return dispatch(newDateAsync(date))
        },
        delDateAsync: function (date){
            return dispatch(delDateAsync(date))
        },
        newDate: function (date){
            dispatch(newDate(date))
        },
        delDate: function (date){
            dispatch(delDate(date))
        },
        setDate: function (data){
            dispatch(setDate(data))
        }
    }
);

var newNavDate = connect(mapStateToProps, mapDispatchToProps)(NavDate);

export default newNavDate;