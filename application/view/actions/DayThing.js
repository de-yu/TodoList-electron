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
        }
      }
      `
        , {id:id})
        
        return data['data']['getThing'];
    }
}

function addDayThingAsync()
{
    return async function()
    {
        var data = await ql(
                `mutation newThing($thing:String){
               newThing(thing:$thing){
        thing
        _id
                }
            }
           `);
           
           return data;
    }
}

function updateDayThingAsync()
{
    
}

function delDayThingAsync()
{
    
}

export {addDayThing , delDayThing , setDayThing, getDayThingIdAsync ,getDayThingAsync ,addDayThingAsync , updateDayThingAsync , delDayThingAsync}