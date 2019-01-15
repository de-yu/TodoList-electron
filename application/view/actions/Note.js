import { createAsyncAction } from 'redux-promise-middleware-actions';
import ql from "./../../../application/models/main_graphql"

const newNote = ()=>({
  type:"new"
})

const getNote = (data) =>({
    type:"get", 
    data:data
})

const updateNote = (updateNote) =>({
    type:"update" , 
    updateNote
})

 
const fetchData = createAsyncAction('FETCH_DATA', async (dispatch) => {
   var data = await ql(
     `{
        getNote{
              id
              text
          }
      }
    `);
  dispatch(getNote(data['data']["getNote"]['text']))
});

export {newNote, getNote , updateNote , fetchData}