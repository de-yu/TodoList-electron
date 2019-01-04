var Datastore = require('nedb');  


export default class Calendar
{
  constructor()
  {
    var Calendar = new Datastore({ filename: './application/models/save/Calendar.db', autoload: true });  
  }
  getCalendar()
  {
    var file = fs.readFileSync("./application/models/save/DayThing.json" , "utf-8");
    var file_json = JSON.parse(file);

    var dates = []

    _.forEach(file_json , (value , key)=>{
      dates.push(key);
    })

    return dates;
  }
  
  static delDate()
  {
    
  }
  
  static newDate()
  {
    
  }
}