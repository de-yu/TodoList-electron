var { graphql, buildSchema } = require('graphql');
var schema =  require("./application/models/schema/schema");
var getWhiteBoard = require("./application/models/api/getWhiteBoard");


var rootValue = {
  getWhiteBoard:getWhiteBoard
};

graphql(schema, `{
    getWhiteBoard
}
`, rootValue).then((response) => {
  console.log(response);
});