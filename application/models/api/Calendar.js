var Datastore = require('nedb');
var _ = require('lodash');

export default class Calendar
{
    constructor ()
    {

    }
    static getCalendar (date)
    {

        var Calendar = new Datastore({filename: './application/models/save/DayThing.db', autoload: true});

        return new Promise(function (resolve, reject)
        {
            Calendar.find({}).sort({date: 1}).exec(function (err, docs)
            {
                var data = [];
                _.forEach(docs, function (value)
                {
                    data.push(value['date']);
                })
                resolve(data);
            })
        });

    }
    static delDate ({date}){
        var Calendar = new Datastore({filename: './application/models/save/DayThing.db', autoload: true});

        return new Promise(function (resolve, reject)
        {
            Calendar.remove({date: date}, function (err, numRemoved)
            {
                resolve(numRemoved);
            });
        });

    }
    static newDate ({date})
    {
        var Calendar = new Datastore({filename: './application/models/save/DayThing.db', autoload: true});
        var doc = {date: date, thing: []};

        return new Promise(function (resolve, reject)
        {
            Calendar.findOne({date: date}, function (err, docs)
            {

                if(docs === null){
                    Calendar.insert(doc, function (err, newDocs)
                    {
                        resolve(date);
                    });
                } else {
                    console.log("already have date");
                    resolve("already have date");
                }
            });
        })
    }
    static getDayThingId({date})
    {
        var Calendar = new Datastore({filename: './application/models/save/DayThing.db', autoload: true});
        
        return new Promise(function(resolve , reject){
          Calendar.find({date:date} , function(err , docs){

            var thingId = docs[0]['thing'];
            resolve(thingId);
          })
        })
    }
    static updateDayThingId({date , thingId})
    {
        var Calendar = new Datastore({filename: './application/models/save/DayThing.db', autoload: true});

        return new Promise(function(resolve , reject){
           Calendar.find({date:date} , function(err , docs){
               
            docs[0]['thing'].push(thingId)
            var newId = docs[0]['thing'];

           Calendar.update({date:date} , {$set: {thing:newId}} , {} , function(err , numReplaced){
                resolve(numReplaced);
            })
          })
        })
    }
    
    static delDayThingId({date , thingId})
    {
        var Calendar = new Datastore({filename: './application/models/save/DayThing.db', autoload: true});
        
        return new Promise(function(resolve , reject){
           Calendar.find({date:date} , function(err , docs){
            var newId = _.remove(docs[0]['thing'] , function(value){
                return value!=thingId
            });

           Calendar.update({date:date} , {$set: {thing:newId}} , {} , function(err , numReplaced){
                resolve(numReplaced);
            })
          })
        })
    }
}