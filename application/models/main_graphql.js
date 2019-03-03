
var { graphql, buildSchema } = require('graphql');
import schema from "./schema/schema";
import Note from "./api/Note";
import DayThing from "./api/DayThing";
import Calendar from "./api/Calendar";


var rootValue = {
  getDayThingId:Calendar.getDayThingId,
  getNote:Note.getNote,
  getThing:DayThing.getThing,
  getCalendar:Calendar.getCalendar,
  
  newNote:Note.newNote,
  updateNote:Note.updateNote,
  newDate:Calendar.newDate,
  delDate:Calendar.delDate,
  
  newThing:function({date}){
      return new Promise(function(resolve , reject){
          DayThing.newThing().then(function(newThingData){
                Calendar.updateDayThingId({date:date , thingId:newThingData._id}).then(function(updateDayThingIdData){
                              resolve(newThingData);
                });
            });
      })
  },
  delThing:function({date , id}){
      return new Promise(function(resolve , reject){
          DayThing.delThing(id).then(function(delThingData){
              console.log(date , id);
              Calendar.delDayThingId({date:date , thingId:id}).then(function(delDayThingIdData){
                  resolve(delDayThingIdData)
              })
          })
      })
  },
  updateThing:DayThing.updateThing
};

export default function ql(query , values)
{
  return graphql(schema, query, rootValue , '' , values);
};