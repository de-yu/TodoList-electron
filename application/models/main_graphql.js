
var { graphql, buildSchema } = require('graphql');
import schema from "./schema/schema";
import getWhiteBoard from "./api/getWhiteBoard";
import {getNote , writeNote} from "./api/Note";
import getDates from "./api/getDates";

var rootValue = {
  getWhiteBoard:getWhiteBoard,
  getNote:getNote,
  getDates:getDates,
  getNote:getNote,
  writeNote:writeNote
};

export default function ql(query , values)
{
  return graphql(schema, query, rootValue , '' , values);
};