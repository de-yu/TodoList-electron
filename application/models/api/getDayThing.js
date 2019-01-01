
var fs = require("fs");

export default function getDayThing({date}) 
{
  var file = fs.readFileSync("./application/models/save/DayThing.json" , "utf-8");
  var file_json = JSON.parse(file);
  
  return file_json[date];
}
