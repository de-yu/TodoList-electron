
var Datastore = require('nedb');  

export default class DayThing
{
  static getThing({id}) 
  {
        var thing = new Datastore({ filename: './application/models/save/Thing.db', autoload: true });
        
        return new Promise(function(resolve , reject){
          thing.find({ _id: {$in : id}} , function(err , docs){
            resolve(docs);
          })
        })
  }
  
  static getWaitingThing({id})
  {
        var thing = new Datastore({ filename: './application/models/save/Thing.db', autoload: true });

        return new Promise(function(resolve , reject){
          thing.find({ _id: {$in : id} , isFinish:false} , function(err , docs){
           resolve(docs);
          })
        })
  }
  
  static getFinishThing({id})
  {
        var thing = new Datastore({ filename: './application/models/save/Thing.db', autoload: true });

        return new Promise(function(resolve , reject){
          thing.find({ _id: {$in : id} , isFinish:true} , function(err , docs){
           resolve(docs);
          })
        })
  }
  
  static newThing()
  {
    
     var thing = new Datastore({ filename: './application/models/save/Thing.db', autoload: true });
     var thingDoc = {isFinish:false , thing: ""}
     
     return new Promise(function(resolve , reject){
              thing.insert(thingDoc , function(err , newDocs){
                resolve(newDocs);
              })
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
  static updateThing({id ,isFinish, text}) {
         var thing = new Datastore({ filename: './application/models/save/Thing.db', autoload: true });
         
         return new Promise(function(resolve , reject){
              thing.update({_id : id} , {$set :{ thing: text , isFinish:isFinish}} , {} , function(err , numReplace){
                resolve(numReplace);  
              })
         })
  }
}