import ql from "./../../../application/models/main_graphql"


const addDayThing = (addDayThing) =>({
    type:"ADD_DAYTHING",
    data:addDayThing
})
const delDayThing = (delDayThing) => ({
    type:"DEL_DAYTHING",
    data:delDayThing
})


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

export {addDayThing , delDayThing , addDayThingAsync , updateDayThingAsync , delDayThingAsync}