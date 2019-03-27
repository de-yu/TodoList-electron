var { buildSchema } = require('graphql');

var schema = buildSchema(`

type Note
{
  id: ID
  text: String
}

 type DayThing{
  isFinish:Boolean
  thing:String
  date:String
  _id:String
} 

type DmlStatus{
  status:String
  text:String
}

type Query {
  getDayThingId(date: String): [String]
  getThing(id:[ID!]):[DayThing]
  getComingNotes(date: [String]): [DayThing]
  getCalendar:[String]
  getNote:Note
  getFinishThing:[DayThing]
  getWaitThing:[DayThing]
}

type Mutation {
  newNote: String
  updateNote(id:ID! , text: String): DmlStatus
  newDate(date: String):String
  delDate(date: String):String

  newThing(date: String): DayThing
  delThing(date: String , id: ID!): Int
  updateThing(id: ID! ,isFinish:Boolean, text:String):Int
}

`
);

export default schema;