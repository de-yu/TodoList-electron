
import React from 'react';
import {Main} from './StyleComponent/Main'
import {DayThingBoard , DayThingBoardTop, DayThingAdd , DayThingDel , DayThingBoardEdit , DayThingItem , DayThingIsFinish , DayThingText} from './StyleComponent/DayThing'

export default class DayThing extends React.Component
{
  constructor(props) {
    super(props)
    }
    async componentDidMount ()
    {
        
      var thingDate = _.join([this.props.match.params.Year , this.props.match.params.Month , this.props.match.params.Day] , "-");
      var id = await this.props.getDayThingIdAsync(thingDate);
      var thing = await this.props.getDayThingAsync(id);

      this.props.setDayThing(thing);

    }
    addThing()
    {
                
        var thingDate = _.join([this.props.match.params.Year , this.props.match.params.Month , this.props.match.params.Day] , "-");    
        this.updateThingProps();
        this.props.addDayThingAsync(thingDate).then(function (newdoc){
            this.props.addDayThing(newdoc._id);
        }.bind(this))
    }
    updateThingProps()
    {
        this.props.data.forEach(function(item , key){
            this.props.updateDayThing(item._id ,
            this.refs[item._id + this.props.componentName.isFinish].checked,
            this.refs[item._id].innerHTML);       
        }.bind(this))
    }
    updateThingDB(event)
    {  
      var id = event.target.id.split("-")[0];

        this.props.updateDayThingAsync(id ,
        this.refs[id + this.props.componentName.isFinish].checked,
        this.refs[id].innerHTML).then(function(data){
            console.log(data);
        })
    }
    componentDidUpdate()
    {
        /*var focusElement = this.props.data[this.props.data.length-1]._id;
        this.refs[focusElement].focus();*/
    }
    allowDrop(ev)
     {
       console.log("allow");
             ev.preventDefault();
              ev.dataTransfer.dropEffect = 'move';
     }
     drag(ev)
     {
       console.log("drag");
       var id = ev.target.id.replace("-item" , "");
       ev.dataTransfer.setData("id",id);
     }
     itemDrop(ev)
     {  
              var id = ev.target.id;

       console.log(id);
              console.log(ev.dataTransfer.getData("id"))
       //this.props.dragSortDayThing(ev.dataTransfer.getData("id") , ev.dataTransfer.getData("target"));
     }
     drop(ev)
     {

             ev.preventDefault();
             this.updateThingProps();
             
             var id=ev.dataTransfer.getData("id");
             this.props.delDayThingAsync(_.join([this.props.match.params.Year , this.props.match.params.Month , this.props.match.params.Day] , "-") , id).then(function(data){
                console.log(data);
                this.props.delDayThing(id);
             }.bind(this))
     }
     createMarkup(thing)
     {
       return {__html: thing};
     }
    render() {
      return(
              <Main>
                  <DayThingBoard>
                      <DayThingBoardTop>
                         <DayThingAdd onClick = {this.addThing.bind(this)}>
                            NEW
                         </DayThingAdd>
                         <DayThingDel onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
                            DEL
                         </DayThingDel>
                      </DayThingBoardTop>

                      <DayThingBoardEdit>
                      {
                        this.props.data.map(function(item , index){

                          return (
                             <DayThingItem id={item._id+ this.props.componentName.item} key={item._id+ this.props.componentName.item} 
                                draggable="true" onDragStart={this.drag.bind(this)} onDrop={this.itemDrop.bind(this)} onDragOver={this.allowDrop.bind(this)} >
                              <DayThingIsFinish id ={item._id+ this.props.componentName.isFinish}  ref={item._id+ this.props.componentName.isFinish}  type="checkbox" defaultChecked={item.isFinish} onChange={this.updateThingDB.bind(this)} />
                              <DayThingText id={item._id} ref={item._id} contentEditable="true" suppressContentEditableWarning="true" onInput={this.updateThingDB.bind(this)} dangerouslySetInnerHTML={this.createMarkup(item.thing)}>      
                              </DayThingText>
                            </DayThingItem>
                             )
                          }.bind(this))
                      }
                      </DayThingBoardEdit>
                  </DayThingBoard>
              </Main>
              );
    }
}