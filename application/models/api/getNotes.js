
var fs = require("fs");

export default function getNotes({date}) 
{
  var file = fs.readFileSync("./application/models/save/notes.json" , "utf-8");
  var file_json = JSON.parse(file);
  
  return file_json[date];
}
