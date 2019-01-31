
var Datastore = require('nedb');  

export default class DayThing
{
  constructor(date) {
    this.date = date;
  }
  static getThing({date}) {
    var DayThing = new Datastore({ filename: './application/models/save/Note.db', autoload: true });  

  }
  static newThing(thing)
  {
    
  }
  static delThing(id) {

  }
  static updateThing(id) {
    
  }
  
}