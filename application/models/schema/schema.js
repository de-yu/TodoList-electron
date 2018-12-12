var { buildSchema } = require('graphql');

var schema = buildSchema(`
  
 type Whiteboard
  {
    board:String
  }
  
 type Notes{
  date:String
  note:[Note]
}
  
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

module.exports  = schema;