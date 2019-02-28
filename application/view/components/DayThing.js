
import React from 'react';
import {Main} from './StyleComponent/Main'
import {DayThingBoard , DayThingBoardTop, DayThingAdd , DayThingDel , DayThingBoardEdit , DayThingItem , DayThingIsFinish , DayThingText} from './StyleComponent/DayThing'

export default class DayThing extends React.Component
{
  constructor(props) {
    super(props)
    console.log(props);
    }
    async componentDidMount ()
    {
      var id = await this.props.getDayThingIdAsync("2018-12-15");
      var thing = await this.props.getDayThingAsync(id);
      
      this.props.setDayThing(thing);
       // console.log(this.props.match.params)
    }
    addThing()
    {
        this.props.addDayThingAsync("2018-12-15").then(function (newdoc){
            console.log(newdoc);
        
            this.props.addDayThing(newdoc._id);
        }.bind(this))
    }
    updateThing(event)
    {
        this.props.updateDayThingAsync(event.target.id , event.target.innerHTML).then(function(data){
            console.log(data)
        })
    }
    isFinishCheck(event)
    {
        
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
     }

     drag(ev)
     {
       console.log("drag");
             ev.dataTransfer.setData("Text",ev.target.id);
     }

     drop(ev)
     {

             ev.preventDefault();
             var data=ev.dataTransfer.getData("Text");
                 console.log(data);
             ev.target.appendChild(document.getElementById(data));
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
                             <DayThingItem key={index} draggable="true">
                              <DayThingIsFinish id ={item._id+"-isFinish"} type="checkbox" defaultChecked={item.isFinish}/>
                              <DayThingText id={item._id} ref={item._id} contentEditable="true" suppressContentEditableWarning="true" onInput={this.updateThing.bind(this)}>      
                                {item.thing}
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