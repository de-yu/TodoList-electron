
var fs = require("fs");

export default function getDates() 
{
  var file = fs.readFileSync("./application/models/save/notes.json" , "utf-8");
  var file_json = JSON.parse(file);

  var dates = []
  
  _.forEach(file_json , (value , key)=>{
    dates.push(key);
  })
  
  return dates;
}
