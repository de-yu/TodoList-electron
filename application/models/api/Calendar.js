

export default class Calendar
{
  constructor()
  {
    
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