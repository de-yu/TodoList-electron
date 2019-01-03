
var fs = require("fs");

export var getDayThing = function({date}) 
{
  var file = fs.readFileSync("./application/models/save/DayThing.json" , "utf-8");
  var file_json = JSON.parse(file);
  
  return file_json[date];
}

export var newDay = function({date})
{
  var file = fs.readFileSync("./application/models/save/DayThing.json" , "utf-8");
  var file_json = JSON.parse(file);
}

export var newDayThing = function({date , thing})
{
  
}

