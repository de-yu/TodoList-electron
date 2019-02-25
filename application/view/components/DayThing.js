
import React from 'react';
import {Main} from './StyleComponent/Main'
import {DayThingBoard , DayThingBoardTop, DayThingAdd , DayThingDel , DayThingBoardEdit , DayThingItem , DayThingIsFinish , DayThingText} from './StyleComponent/DayThing'

export default class DayThing extends React.Component
{
  constructor(props) {
    super(props)
    console.log(props);
    }/*
    async componentDidMount ()
    {
        console.log(this.props.match.params)
    }*/
    addThing()
    {
        this.props.addDayThingAsync().then(function (newdoc){
            this.props.addDayThing();
        }.bind(this))
    }
    focusEnter(event)
    {
        console.log(event);
        console.log("a");
    }
    
    componentDidUpdate()
    {
        var focusElement = "a".concat(this.props.data.length-1);
        this.refs[focusElement].focus();
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
                              <DayThingIsFinish type="checkbox" defaultChecked={item.isFinish}/>
                              <DayThingText ref={"a" + index} contentEditable="true" suppressContentEditableWarning="true" onBlur={this.focusEnter.bind(this)}>      
                                {item.text}
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