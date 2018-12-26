
import React from 'react';
import {Main} from './StyleComponent/Main'
import {NoteBoard , NoteBoardTop , NoteBoardEdit} from './StyleComponent/Note'


export default class Note extends React.Component
{
  constructor(props) {
    super()
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