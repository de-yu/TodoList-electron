
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

var ql = graphql(schema, `{
    getDates
}
`, rootValue);

export default ql;