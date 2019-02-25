
var Datastore = require('nedb');  

export default class DayThing
{
  static getThing({id}) 
  {
        var thing = new Datastore({ filename: './application/models/save/Thing.db', autoload: true });

  }
  static newThing()
  {
    
     var thing = new Datastore({ filename: './application/models/save/Thing.db', autoload: true });
     var thingDoc = {isFinish:false , thing: "" , _id:""}
     
     return new Promise(function(resolve , reject){
            thing.find({}, function (err, docs) {
                var maxid = 0;
                _.forEach(docs , function(value){
                    maxid = Math.max(maxid , value._id)
                })

                thingDoc['_id'] = maxid +1 ;

                thing.insert(thingDoc , function(err , newDocs){
                  resolve(newDocs);
                })
         });
     })
  }
  static delThing({id}) {
     var thing = new Datastore({ filename: './application/models/save/Thing.db', autoload: true });
     
     return new Promise(function(resolve , reject){
            thing.remove({_id:id} , function(err , numRemoved){
              resolve(numRemoved);
        })
     })

  }
  static updateThing({id , text}) {
         var thing = new Datastore({ filename: './application/models/save/Thing.db', autoload: true });
         
         return new Promise(function(resolve , reject){
              thing.update({_id : id} , {$set :{ thing: text}} , {} , function(err , numReplace){
                resolve(numReplace);  
              })
         })
  }
}