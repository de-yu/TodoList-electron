
import React from 'react';
import Note from '../components/Note';
import {setNote , newNote , getNote , saveNote}from '../actions/Note'
import { connect } from 'react-redux';

const mapStateToProps = state =>({note:state.note , id:state.id});

const mapDispatchToProps = (dispatch , props) => ({
    newNote:function(){
        return dispatch(newNote())
    },    
    getNote:function(){
        return dispatch(getNote())
    },
    saveNote:function(){
        return dispatch(saveNote())
    },
    setNote:function(id, note){ 
        dispatch(setNote({
            note:note , id:id
        })) },
    dispatch:dispatch
    }
);

var NewNote = connect(mapStateToProps ,mapDispatchToProps )(Note);

export default NewNote;