
import React from 'react';
import Note from '../components/Note';
import {setNote , newNote , getNote , saveNote}from '../actions/Note'
import { connect } from 'react-redux';

const mapStateToProps = state =>({note:state.Note.note , id:state.Note.id});


const mapDispatchToProps = (dispatch , props) => ({
    newNote:function(){
        return dispatch(newNote())
    },    
    getNote:function(){
        return dispatch(getNote())
    },
    saveNote:function(note){
        return dispatch(saveNote(note))
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