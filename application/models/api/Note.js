
var NoteCon = new Nedb({filename: __dirname + '/../save/Note.db'});

export default class Note{
    constructor (){

    }
    static newNote (){

        NoteCon.loadDatabase();
        var doc = {note: ""};
        return new Promise(function (resolve, reject){
            NoteCon.findOne({}, function (err, docs){

                if(docs === null){
                    NoteCon.insert(doc, function (err, newDocs){
                        resolve("");
                    });
                } else {
                    resolve("already have db");
                }
            });
        })
    }
    static getNote (){
        NoteCon.loadDatabase();
        return new Promise(function (resolve, reject){

            NoteCon.findOne({}, function (err, docs){
                console.log(docs)
                resolve({id: docs['_id'], text: docs['note']});
            });
        })

    }
    static updateNote ({id, text})
    {
        NoteCon.loadDatabase();
        return new Promise(function (resolve, reject){
            NoteCon.update({_id: id}, {$set: {note: text}}, function (err, newDocs){

                if(err === null){
                    resolve({
                        status: "success",
                        text: text
                    });
                } else {
                    reject({
                        status: "fail",
                        text: err
                    })
                }
            });
        })
    }
}
