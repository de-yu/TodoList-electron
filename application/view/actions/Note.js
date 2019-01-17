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


 function get(dispatch) {
     return async function(dispatch){
           var data = await ql(
     `{
        getNote{
              id
              text
          }
      }
    `);
  dispatch(getNote(data['data']["getNote"]['text']))
     }

}

export {newNote, getNote , updateNote , get}