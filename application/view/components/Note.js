
import React from 'react';
import {Main} from './StyleComponent/Main'
import {NoteBoard , NoteBoardTop , NoteBoardEdit} from './StyleComponent/Note'
import ql from "./../../../application/models/main_graphql"

export default class Note extends React.Component
{
  constructor(props) {
    super()
  }
    componentWillMount ()
  {
    ql(
     `{
      getNote
      }
    `).then(function(data)      {
            console.log(data);
      })

      ql(`
        mutation writeNote($text: String) {
            writeNote(text: $text) 
        }
        ` , {
        'text':"233"
        }).then(function(data)      {
            console.log(data);
      })
  }
  render() {
    return(
            <Main>
              <NoteBoard>
                <NoteBoardTop>
              
                </NoteBoardTop>
                <NoteBoardEdit>
              
                </NoteBoardEdit>
              </NoteBoard>
            </Main>
            );
  }
}