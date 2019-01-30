
import React from 'react';
import {Main} from './StyleComponent/Main'
import {NoteBoard , NoteBoardTop , NoteBoardEdit} from './StyleComponent/Note'


export default class Note extends React.Component
{
  constructor(props) {
    super(props)

  }
   async componentDidMount  ()
  {
    var data = await this.props.newNote();
    var note = await this.props.getNote();
   
    this.refs.note.value = this.props.note;
  }
  save(event)
  {
      this.props.saveNote(this.refs.note.value).then (function(data){
                  console.log(data);
        this.props.setNote({
         note:data['text'],
         id:data['id']
       })

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