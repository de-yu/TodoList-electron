
var thing = new Nedb({filename: './save/Thing.db'});

export default class DayThing{
    static getThing ({id})
    {
        thing.loadDatabase();

        return new Promise(function (resolve, reject){
            thing.find({_id: {$in: id}}, function (err, docs){
                resolve(docs);
            })
        })
    }
    static getWaitThing ({id})
    {
        thing.loadDatabase();

        return new Promise(function (resolve, reject){
            thing.find({_id: {$in: id}, isFinish: false}, function (err, docs){
                resolve(docs);
            })
        })
    }
    static getFinishThing ({id})
    {
        thing.loadDatabase();
        
        return new Promise(function (resolve, reject){
            thing.find({_id: {$in: id}, isFinish: true}, function (err, docs){
                    resolve(docs);
                })
            })

    }
    static newThing ({date}){

        thing.loadDatabase();
        var thingDoc = {isFinish: false, thing: "" , date:date};

        return new Promise(function (resolve, reject){
            thing.insert(thingDoc, function (err, newDocs){
                resolve(newDocs);
            })
        })
    }
    static delThing ({id}) {
        thing.loadDatabase();

        return new Promise(function (resolve, reject){
            thing.remove({_id: id}, function (err, numRemoved){
                resolve(numRemoved);
            })
        })

    }
    static updateThing ({id, isFinish, text}) {
        thing.loadDatabase();

        return new Promise(function (resolve, reject){
            thing.update({_id: id}, {$set: {thing: text, isFinish: isFinish}}, {}, function (err, numReplace){
                resolve(numReplace);
            })
        })
    }
}