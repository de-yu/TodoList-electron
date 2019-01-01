var { buildSchema } = require('graphql');

var schema = buildSchema(`

  
 type DayThing{
  status:String
  content:String
} 
  
type Query {
  getNotes(date: String): [DayThing]
  getComingNotes(date: [String]): [DayThing]
  getDates:[String]
  getNote:String
}

type Mutation {
 writeNote(text: String): String
}

`
);

export default schema;