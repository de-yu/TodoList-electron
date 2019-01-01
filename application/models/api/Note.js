var fs = require("fs");

export var getNote = function() 
{
  var file = fs.readFileSync("./application/models/save/Note.json" , "utf-8");
  var file_json = JSON.parse(file);
  
  return file_json['note'];
}

export var writeNote = function({text})
{
    var data = {
        'note':text
    };
    var fsdata = JSON.stringify(data);
    fs.writeFileSync("./application/models/save/Note.json" , fsdata);
    
    return data['note'];
}