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
  return async function(dispatch  , state)
  {
      
      var data =   await  ql(
           `mutation delDate($date:String){
               delDate(date:$date)
            }
           `
         , 
         {
             date:date
         });
        
        dispatch(setDate(data))
  }
}

function newDate(date)
{
  return async function(dispatch  , state)
  {
      
      var data =   await  ql(
           `mutation newDate($date:String){
               newDate(date:$date)
            }
           `
         , 
         {
             date:date
         });
        
        dispatch(setDate(data))

  }
}



export {setDate , getDate , delDate , newDate}