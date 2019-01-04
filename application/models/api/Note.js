var Datastore = require('nedb');  

export default class Note
{
  constructor()
  {
    
  }
  
  static getNote() 
  {
    var Note = new Datastore({ filename: './application/models/save/Note.db', autoload: true });  
    var doc = { note: ""};
    return new Promise(function(resolve , reject){

          Note.findOne({}, function (err, docs) {
            
            if(docs===null)
            {
               var doc = { note: ""};
               Note.insert(doc, function (err, newDocs) {
                 resolve(doc['note']);
               });
            }
            else{
                resolve(docs['note']);
            }
          });
    })

  }
  static writeNote({text})
  {
    var doc = { note: 'text'};
     var Note = new Datastore({ filename: './application/models/save/Note.db', autoload: true });  
    return new Promise(function(resolve , reject){
          Note.insert(doc, function (err, newDocs) {
            resolve(newDocs['note']);
          });
    })
  }
}
