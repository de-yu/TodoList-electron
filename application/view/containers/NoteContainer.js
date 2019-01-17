
import React from 'react';
import Note from '../components/Note';
import {newNote , getNote , updateNote} from '../actions/Note'
import { connect } from 'react-redux';

import reducer from "../reducers/NoteReducer"

const mapStateToProps = state =>({note:state.note , id:state.id});

const mapDispatchToProps = (dispatch , props) => ({
    getNote:function(){dispatch(getNote(props))},
    saveNote:function(){dispatch(updateNote(props))},
    dispatch:dispatch
    }
);

var NewNote = connect(mapStateToProps ,mapDispatchToProps )(Note);

export default NewNote;