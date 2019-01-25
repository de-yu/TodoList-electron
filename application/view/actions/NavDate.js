import ql from "./../../../application/models/main_graphql"

const setDate = (data) => ({
  type:'setDate',
  data:data
})


function getDate(){
  
      return async function(dispatch)
    {
      var data = await  ql(
           `{
              getDate
            }
           `
        );

        
        dispatch(setDate(
              data,
          ));
    }
  
}


function delDate(date)
{
  
}

function newDate(date)
{
  return async function(dispatch  , state)
  {
         await  ql(
           `mutation newDate($date:String){
               newDate(date:$date)
            }
           `
        );
  }
}



export {setDate , getDate , delDate , newDate}