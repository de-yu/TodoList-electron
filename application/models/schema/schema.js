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
  _id:String
} 

type DmlStatus{
  status:String
  text:String
}

type Query {
  getDayThing(date: String): [DayThing]
  getComingNotes(date: [String]): [DayThing]
  getCalendar:[String]
  getNote:Note
}

type Mutation {
  newNote: String
  updateNote(id:ID! , text: String): DmlStatus
  newDate(date: String):String
  delDate(date: String):String
  newThing(thing: String): DayThing
  delThing(id: ID!): DayThing
  updateThing(id: ID! , thing:String):DayThing
}

`
);

export default schema;