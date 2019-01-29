import ql from "./../../../application/models/main_graphql"


const setNote = (data) =>({
    type:"setNote", 
    data:data
})

function newNote(dispatch)
{
    return async function(dispatch)
    {
        await ql(
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

function saveNote(note , resolve)
{
    return async function(dispatch , state)
    {

        var data =  await ql(`
        mutation updateNote($id:ID!, $text: String) {
             updateNote(id:$id , text: $text) {
                status
                text
              }
        }
        ` , {
        'id':state().Note.id,
        'text':note
        })
        
        return data["data"]["updateNote"];

    }
}

export {setNote , newNote , getNote , saveNote}