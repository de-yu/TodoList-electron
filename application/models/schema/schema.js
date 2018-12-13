var { buildSchema } = require('graphql');

var schema = buildSchema(`

  
 type Note{
  status:String
  content:String
} 
  
type Query {
  getNotes(date: String): [Note]
  getComingNotes(date: [String]): [Note]
  getDates:[String]
  getWhiteBoard:String
}`
);

export default schema;