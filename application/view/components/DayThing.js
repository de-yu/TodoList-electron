
import React from 'react';
import {Main} from './StyleComponent/Main'
import {DayThingBoard , DayThingBoardTop, DayThingAdd , DayThingDel , DayThingBoardEdit} from './StyleComponent/DayThing'

export default class DayThing extends React.Component
{
  constructor(props) {
    super(props)
    console.log(props);
    }
    async componentDidMount ()
    {
        console.log(this.props.match.params)
    }
    addThing()
    {
        
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
                      </DayThingBoardEdit>
                  </DayThingBoard>
              </Main>
              );
    }
}