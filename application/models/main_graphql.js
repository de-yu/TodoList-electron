
/* global _ */

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
  
  getWaitThing:function(){
        return new Promise(function(resolve , reject){
        Calendar.geAllThingId().then(function(allThingId){
            DayThing.getWaitThing({id:allThingId}).then(function(waitThing){
                resolve(waitThing);
            });
        });
    });
  },
  getFinishThing:function(){
        return new Promise(function(resolve , reject){
        Calendar.geAllThingId().then(function(allThingId){
            DayThing.getFinishThing({id:allThingId}).then(function(finishThing){
                resolve(finishThing);
            });
        });
    });
  },
  
  newNote:Note.newNote,
  updateNote:Note.updateNote,
  newDate:Calendar.newDate,
  delDate:Calendar.delDate,
  
  newThing:function({date}){
      return new Promise(function(resolve , reject){
          DayThing.newThing({date:date}).then(function(newThingData){
                Calendar.updateDayThingId({date:date , thingId:newThingData._id}).then(function(updateDayThingIdData){
                              resolve(newThingData);
                });
            });
      });
  },
  delThing:function({date , id}){
      return new Promise(function(resolve , reject){
          DayThing.delThing({id:id}).then(function(delThingData){
              console.log(date , id);
              Calendar.delDayThingId({date:date , thingId:id}).then(function(delDayThingIdData){
                  resolve(delDayThingIdData);
              });
          });
      });
  },
  updateThing:DayThing.updateThing,
  updateThingSort:Calendar.updateDayThingSort
};

export default function ql(query , values)
{
  return graphql(schema, query, rootValue , '' , values);
};