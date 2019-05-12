import ql from "./../../models/main_graphql"

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

const dragSortDayThing = (dragSortDayThing) => ({
  type:"DRAGSORT_DAYTHING" , 
  data:dragSortDayThing
})

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
function updateDayThingAsync(id ,isFinish ,  thing)
{
    return async function()
    {
        var data = await ql(
            `
                mutation updateThing($id:ID! ,$isFinish:Boolean ,  $text:String)
                {
                    updateThing(id:$id ,isFinish:$isFinish, text:$text)                  
                }
            `
         , {id:id ,isFinish:isFinish ,  text:thing});

        return data;
    }
}
function updateDayThingSort(date , id)
{
  return async function(){
        var data = await ql(
        `
          mutation updateThingSort($date:String ,  $id: [ID!])
          {
            updateThingSort(date:$date , id:$id)
          }
        `
        ,{date:date , id:id});
     
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

export {addDayThing , delDayThing , setDayThing,updateDayThing  ,  dragSortDayThing , updateDayThingSort ,getDayThingIdAsync ,getDayThingAsync ,addDayThingAsync , updateDayThingAsync , delDayThingAsync}