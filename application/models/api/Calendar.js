
var CalendarCon =  new Nedb({filename: __dirname +'/../save/DayThing.db'});

export default class Calendar
{
    constructor ()
    {

    }
    static getCalendar (date)
    {

        CalendarCon.loadDatabase();
        
        return new Promise(function (resolve, reject)
        {
            CalendarCon.find({}).projection({date:1 , _id:0}).sort({date: 1}).exec(function (err, docs)
            {
                var data = _.map(docs, 'date');
                resolve(data);
            })
        });

    }
    static geAllThingId()
    {
        CalendarCon.loadDatabase();

        return new Promise(function (resolve, reject)
        {
            CalendarCon.find().sort({date: 0}).exec(function (err, docs)
            {
                var allThingId = _.map(docs, 'thing');
                allThingId = _.flatten(allThingId); 
                resolve(allThingId);
            })
        });
    }
    static delDate ({date}){
                CalendarCon.loadDatabase();

        return new Promise(function (resolve, reject)
        {
            CalendarCon.remove({date: date}, function (err, numRemoved)
            {
                resolve(numRemoved);
            });
        });

    }
    static newDate ({date})
    {
        CalendarCon.loadDatabase();
        var doc = {date: date, thing: []};

        return new Promise(function (resolve, reject)
        {
            CalendarCon.findOne({date: date}, function (err, docs)
            {

                if(docs === null){
                    CalendarCon.insert(doc, function (err, newDocs)
                    {
                        resolve(date);
                    });
                } else {

                    resolve("already have date");
                }
            });
        })
    }
    static getDayThingId({date})
    {
        CalendarCon.loadDatabase();
        
        return new Promise(function(resolve , reject){
          CalendarCon.find({date:date} , function(err , docs){

            var thingId = docs[0]['thing'];
            resolve(thingId);
          })
        })
    }
    static updateDayThingId({date , thingId})
    {
        CalendarCon.loadDatabase();

        return new Promise(function(resolve , reject){
           CalendarCon.find({date:date} , function(err , docs){
               
            docs[0]['thing'].push(thingId)
            var newId = docs[0]['thing'];
            console.log(newId);
           CalendarCon.update({date:date} , {$set: {thing:newId}} , {} , function(err , numReplaced){
                resolve(numReplaced);
            })
          })
        })
    }
    static updateDayThingSort({date , id})
    {
        CalendarCon.loadDatabase();  
        console.log(date , id)
        return new Promise(function(resolve , reject){
           CalendarCon.update({date:date} , {$set: {thing:id}} , {} , function(err , numReplaced){
                resolve(numReplaced);
            })
        })
    }
    static delDayThingId({date , thingId})
    {
        CalendarCon.loadDatabase();
        
        return new Promise(function(resolve , reject){
           CalendarCon.find({date:date} , function(err , docs){
            var newId = _.remove(docs[0]['thing'] , function(value){
                return value!=thingId
            });

           CalendarCon.update({date:date} , {$set: {thing:newId}} , {} , function(err , numReplaced){
                resolve(numReplaced);
            })
          })
        })
    }
}