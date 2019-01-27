
import React from 'react';
import {Main} from './StyleComponent/Main'
import {NoteBoard , NoteBoardTop , NoteBoardEdit} from './StyleComponent/Note'


export default class Note extends React.Component
{
  constructor(props) {
    super(props)

  }
  componentDidMount  ()
  {
    this.props.newNote().then(function(data){
        console.log(data);
    }.bind(this))        
    this.props.getNote().then(function(){
        this.refs.note.value = this.props.note;
    }.bind(this))
  }
  save(event)
  {
      this.props.saveNote(this.refs.note.value).then (function(data){
          console.log(data);
      })
  }
  render() {
  
    return(
            <Main>
              <NoteBoard>
                <NoteBoardTop>
                </NoteBoardTop>
                <NoteBoardEdit ref="note" onChange={this.save.bind(this)} defaultValue={this.props.note} id={this.props.id}>
                </NoteBoardEdit>
              </NoteBoard>
            </Main>
            );
  }
}