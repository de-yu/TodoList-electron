
var fs = require("fs");

export default function getComingNotes() 
{
  var file = fs.readFileSync("./application/models/save/notes.json" , "utf-8");
  var file_json = JSON.parse(file);
}
