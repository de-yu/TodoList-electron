
var Datastore = require('nedb');  

export default class DayThing
{
  static getThing({id}) 
  {
   

  }
  static newThing()
  {
    
     var thing = new Datastore({ filename: './application/models/save/Thing.db', autoload: true });
     var thingDoc = {text: "" , id:""}
     
     return new Promise(function(resolve , reject){
            thing.count({}, function (err, count) {
            thingDoc['id'] = count;

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
  static updateThing(id) {
    
  }
  
}