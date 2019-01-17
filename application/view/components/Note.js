
import React from 'react';
import {Main} from './StyleComponent/Main'
import {NoteBoard , NoteBoardTop , NoteBoardEdit} from './StyleComponent/Note'
import ql from "./../../../application/models/main_graphql"
import {fetchData , get} from '../actions/Note'


export default class Note extends React.Component
{
  constructor(props) {
    super(props)

    console.log(props);
  }
  componentDidMount  ()
  {

    /*
    var newNote = await ql(
        `mutation newNote{
            newNote
         }
        `
     );
      
   var data = await ql(
     `{
        getNote{
              id
              text
          }
      }
    `);
      
    console.log(data['data']["getNote"]['text']);
    this.setState({
    note:data['data']["getNote"]['text'] , 
    id:data['data']["getNote"]['id']
     });
    this.refs.note.value = data['data']["getNote"]['text'];*/
  }
  save(event)
  {

   this.props.dispatch(get(this.props.dispatch)).then(function(){
       console.log(this.props.note);
   }.bind(this))
   // this.props.dispatch(fetchData.pending());          // { type: 'FETCH_DATA_PENDING' }
 //this.props.dispacth(fetchData.fulfilled(payload));
      /*
      ql(`
        mutation updateNote($id:ID!, $text: String) {
             updateNote(id:$id , text: $text) 
        }
        ` , {
        'id':this.refs.note.id,
        'text':this.refs.note.value
        }).then(function(data)      {
            console.log(data);
      })*/
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