
var { graphql, buildSchema } = require('graphql');
import schema from "./schema/schema";
import Note from "./api/Note";
import DayThing from "./api/DayThing";
import Calendar from "./api/Calendar";


var rootValue = {
  getNote:Note.getNote,
  //getDayThing:DayThing,
  getCalendar:Calendar.getCalendar,
  
  newNote:Note.newNote,
  updateNote:Note.updateNote,
  newDate:Calendar.newDate,
  delDate:Calendar.delDate,
  newThing:DayThing.newThing,
  delThing:DayThing.delThing,
  updateThing:DayThing.updateThing
};

export default function ql(query , values)
{
  return graphql(schema, query, rootValue , '' , values);
};