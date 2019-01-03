var { buildSchema } = require('graphql');

var schema = buildSchema(`

  
 type DayThing{
  status:String
  content:String
} 
  
type Query {
  getDayThing(date: String): [DayThing]
  getComingNotes(date: [String]): [DayThing]
  getDates:[String]
  getNote:String
}

type Mutation {
  writeNote(text: String): String
  newDate(date: String):String
  delDate(date: String):String
  newThing(thing: String): DayThing
  delThing(id: ID!): DayThing
  updateThing(id: ID! , thing:String):DayThing
}

`
);

export default schema;