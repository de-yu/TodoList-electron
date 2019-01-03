
var fs = require("fs");

export default class DayThing
{
  constructor(date) {
    this.date = date;
  }
  getThing() {
    var file = fs.readFileSync("./application/models/save/DayThing.json","utf-8");
    var file_json = JSON.parse(file);

    return file_json[date];
  }
  static newThing(thing)
  {
    
  }
  static delThing(id) {

  }
  static updateThing(id) {

  }
  
}