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
  static delDate({date})
  {
    var Calendar = new Datastore({filename:'./application/models/save/DayThing.db',autoload:true});
    
    return new Promise(function(resolve,reject) {
      Calendar.remove({date:date},function(err,numRemoved) {
        resolve(numRemoved);
      });
    });
    
  }
  static newDate({date})
  {
    var Calendar = new Datastore({filename:'./application/models/save/DayThing.db',autoload:true});
    var doc = {date:date,thing:""};
    console.log(doc);
    return new Promise(function(resolve,reject) {
      Calendar.findOne({date:date},function(err,docs) {

        if (docs === null) {
          Calendar.insert(doc,function(err,newDocs) {
            resolve(date);
          });
        }
        else {
            console.log("already have date");
          resolve("already have date");
        }
      });
    })


  }
}