
var fs = require("fs");

var getWhiteBoard = function()
{
  return fs.readFileSync("./application/models/save/whiteboard.json" , "utf-8");
}

module.exports = getWhiteBoard;