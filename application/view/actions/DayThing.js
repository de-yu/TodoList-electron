import ql from "./../../../application/models/main_graphql"


const addDayThing = (addDayThing) =>({
    type:"ADD_DAYTHING",
    data:addDayThing
});
const delDayThing = (delDayThing) => ({
    type:"DEL_DAYTHING",
    data:delDayThing
});

const setDayThing = (setDayThing) =>({
  type:"SET_DAYTHING" , 
  data: setDayThing
});

const updateDayThing = (updateDayThing) => ({
    type:"UPDATE_DAYTHING" , 
    data:updateDayThing
});

function getDayThingIdAsync(date)
{
  return async function(){
    
    var data = await ql(`
            query getDayThingId($date: String)
            {
              getDayThingId(date: $date)
            }
     ` , {date:date})
    
    return data['data']['getDayThingId'];
  }
}
function getDayThingAsync(id)
{
    return async function(){
      var data = await ql(`
      query getThing($id : [ID!])
      {
        getThing(id:$id){
            isFinish
            thing
            _id
        }
      }
      `
        , {id:id})
        
        return data['data']['getThing'];
    }
}

function addDayThingAsync(date)
{
    return async function()
    {
        var data = await ql(
                `mutation newThing($date:String){
               newThing(date:$date){
                    thing
                    _id
                }
            }
           ` , {date:date});
          
           return data['data']['newThing'];
    }
}
function updateDayThingAsync(id , thing)
{
    return async function()
    {
        var data = await ql(
            `
                mutation updateThing($id:ID! , $text:String)
                {
                    updateThing(id:$id , text:$text)                  
                }
            `
         , {id:id , text:thing});

        return data;
    }
}

function delDayThingAsync(date , id)
{
    return async function()
    {
        var data = await ql(
                `
                    mutation delThing($date:String , $id:ID!)
                    {
                        delThing(date:$date , id:$id)
                    }
                `
         , {date:date , id:id})
         
         return data;
    }
}

export {addDayThing , delDayThing , setDayThing,updateDayThing  ,  getDayThingIdAsync ,getDayThingAsync ,addDayThingAsync , updateDayThingAsync , delDayThingAsync}