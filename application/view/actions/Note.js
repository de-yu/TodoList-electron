import ql from "./../../../application/models/main_graphql"


const setNote = (data) =>({
    type:"set", 
    data:data
})

function newNote(dispatch)
{
    return async function(dispatch)
    {
        ql(
           `mutation newNote{
               newNote
            }
           `
        );
        dispatch(setNote({
              note:"",
              id:""
          }));
    }
}

 function getNote(dispatch) {
     return async function(dispatch)
     {
        var data = await ql(
        `{
           getNote{
                 id
                 text
             }
         }
       `);
     dispatch(setNote({
         note:data['data']["getNote"]['text'],
         id:data['data']["getNote"]['id']
       }));
    }
}

function saveNote(dispatch , state)
{
    return async function(dispatch , state)
    {
        console.log(state());
        var data =  await ql(`
        mutation updateNote($id:ID!, $text: String) {
             updateNote(id:$id , text: $text) 
        }
        ` , {
        'id':state().id,
        'text':state().note
        })
        
        dispatch(setNote({
         note:data['data']["getNote"]['text'],
         id:data['data']["getNote"]['id']
       }));
    }
}

export {setNote , newNote , getNote , saveNote}