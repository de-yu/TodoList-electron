var Datastore = require('nedb');


export default class Calendar
{
  constructor() {

  }
  static getCalendar(date) {
    
    var Calendar = new Datastore({filename:'./application/models/save/DayThing.db',autoload:true});

    return new Promise(function(resolve,reject) {
      Calendar.find({},function(err,docs) {
        resolve(docs);
      })
    });
    
  }
  static delDate(  {id})
  {
    var Calendar = new Datastore({filename:'./application/models/save/DayThing.db',autoload:true});

    return new Promise(function(resolve,reject) {
      Calendar.remove({_id:id},function(err,numRemoved) {
        resolve(numRemoved);
      });
    });
  }
  static newDate(  {date})
  {
    var Calendar = new Datastore({filename:'./application/models/save/DayThing.db',autoload:true});
    var doc = {date:date,thing:""};

    return new Promise(function(resolve,reject) {
      Calendar.findOne({date:date},function(err,docs) {

        if (docs === null) {
          Calendar.insert(doc,function(err,newDocs) {
            resolve("");
          });
        }
        else {
          resolve("already have date");
        }
      });
    })


  }
}