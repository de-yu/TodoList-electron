
var { graphql, buildSchema } = require('graphql');
import schema from "./schema/schema";
import getWhiteBoard from "./api/getWhiteBoard";
import getNotes from "./api/getNotes";
import getDates from "./api/getDates";

var rootValue = {
  getWhiteBoard:getWhiteBoard,
  getNotes:getNotes,
  getDates:getDates
};

export default function ql(query , values)
{
  return graphql(schema, query, rootValue , '' , values);
};