
var fs = require("fs");

export default function getWhiteBoard()
{
  var file = fs.readFileSync("./application/models/save/whiteboard.json" , "utf-8");
  var file_json = JSON.parse(file);
  return file_json['whiteboard'];
}
