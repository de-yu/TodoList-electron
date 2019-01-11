
import React from 'react';
import Note from '../component/Note';
import {updateNote} from '../actions/Note'
import { connect } from 'react-redux';


const mapStateToProps = state =>({note:state.text , id:state.id});

const mapDispatchToProps = (dispatch , props) => ({
    saveNote:function(){dispatch(updateNote(props))}
    }
);


export default connect(mapStateToProps ,mapDispatchToProps )(Note);