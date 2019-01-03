var fs = require("fs");


export default class Note
{
  constructor()
  {
    
  }
  static getNote() 
  {
    var file = fs.readFileSync("./application/models/save/Note.json" , "utf-8");
    var file_json = JSON.parse(file);

    return file_json['note'];
  }
  static writeNote({text})
  {
      var data = {
          'note':text
      };
      var fsdata = JSON.stringify(data);
      fs.writeFileSync("./application/models/save/Note.json" , fsdata);

      return data['note'];
  }
}
