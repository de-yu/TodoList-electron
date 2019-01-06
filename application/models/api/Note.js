var Datastore = require('nedb');  

export default class Note
{
  constructor()
  {
    
  }
  
  static newNote()
  {
      
    var Note = new Datastore({ filename: './application/models/save/Note.db', autoload: true });  
    var doc = { note: ""};
    return new Promise(function(resolve , reject){
          Note.findOne({}, function (err, docs) {
            
            if(docs===null)
            {
               Note.insert(doc, function (err, newDocs) {
                  resolve("");
               });
            }
            else{
                resolve("already have db");
            }
          });
    })
  }
  
  static getNote() 
  {
    var Note = new Datastore({ filename: './application/models/save/Note.db', autoload: true });  
    return new Promise(function(resolve , reject){

          Note.findOne({}, function (err, docs) {
              console.log(docs)
                resolve({id:docs['_id'] , text:docs['note']});         
          });
    })

  }
  static updateNote({id , text})
  {
    console.log(id , text);
    var Note = new Datastore({ filename: './application/models/save/Note.db', autoload: true });  
    return new Promise(function(resolve , reject){
          Note.update({ _id: id },{ $set: { note: text} }, function (err, newDocs) {
            resolve(newDocs['note']);
          });
    })
  }
}
