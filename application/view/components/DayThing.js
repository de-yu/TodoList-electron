
/* global _ */

import React from 'react';
import {Main} from './StyleComponent/Main'
import {DayThingBoard , DayThingBoardTop, DayThingAdd , DayThingDel , DayThingBoardEdit , DayThingItem ,DayThingIsFinishLabel, DayThingIsFinish , DayThingIsFinishMark , DayThingText} from './StyleComponent/DayThing'
import $ from "jquery";
import autosize from "autosize";
import striptags from 'striptags';
export default class DayThing extends React.Component
{
  constructor(props) {
        super(props)
        this.temp = {dragid:"" , targetid:"" , targetclass:""};
        this.thingDate = "2019-03-13";  
    }
    async componentDidMount ()
    {
        
      //this.thingDate = _.join([this.props.match.params.Year , this.props.match.params.Month , this.props.match.params.Day] , "-");
      var id = await this.props.getDayThingIdAsync(this.thingDate);
      var thing = await this.props.getDayThingAsync(id);

      this.props.setDayThing(thing);


    }
    addThing()
    {
                
        this.updateThingProps();
        this.props.addDayThingAsync(this.thingDate).then(function (newdoc){
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
        var text = striptags(this.refs[id].value);
        this.props.updateDayThingAsync(id ,
        this.refs[id + this.props.componentName.isFinish].checked,
        text).then(function(data){
            console.log(data);
        })
    }
    componentDidUpdate()
    {
        console.log(this.props.data);
        if(this.props.action=="ADD_DAYTHING")
        {
            var focusElement = this.props.data[this.props.data.length-1]._id;
            this.refs[focusElement].focus();
        }
        this.props.data.map(function(item , index){
          autosize($("#" + item._id))
        })
    }
    dragenter(ev)
    {
        if(ev.target.id!=="")
        {
            this.temp.targetid =ev.target.id.replace("-item" , "");
            this.temp.targetid = this.temp.targetid.replace("-isfinish" , "");
            $("#"+this.temp.targetid + "-item").addClass("in-drag");
        }
    }
    dragleave(ev)
    {
      if(ev.target.id!=="")
      {
              var removeClassId =ev.target.id.replace("-item" , "");
              removeClassId= removeClassId.replace("-isfinish" , "");

              $("#"+removeClassId + "-item").removeClass("in-drag");

      }
    }
    allowDrop(ev)
     {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'move';
        
        if(ev.target.id!=="")
        {
            this.temp.targetid =ev.target.id.replace("-item" , "");
            this.temp.targetid = this.temp.targetid.replace("-isfinish" , "");
            $("#"+this.temp.targetid + "-item").addClass("in-drag");
        }
     }
     drag(ev)
     {
       ev.dataTransfer.effectAllowed = 'move';
       this.temp.dragid = ev.target.id.replace("-item" , "");
     }
     itemDrop(ev)
     {  
       $("#"+this.temp.targetid + "-item").removeClass("in-drag");
       this.props.dragSortDayThing(this.temp.dragid , this.temp.targetid);
       
       var ids = _.map(this.props.data, '_id');
       
       this.props.updateSortDayThingAsync(this.thingDate , ids).then(function(data){
           console.log(data);
       })
     }
    deleteDrop(ev)
     {
        ev.preventDefault();
        this.updateThingProps();

        var id= this.temp.dragid;
        this.props.delDayThingAsync(this.thingDate , id).then(function(data){
           this.props.delDayThing(id);
        }.bind(this))
     }
    render() {
      return(
              <Main>
                  <DayThingBoard>
                      <DayThingBoardTop>
                         <DayThingAdd onClick = {this.addThing.bind(this)}>
                            NEW
                         </DayThingAdd>
                         <DayThingDel onDrop={this.deleteDrop.bind(this)} onDragOver={this.allowDrop.bind(this)} title="拖曳事項刪除">
                            DEL
                         </DayThingDel>
                      </DayThingBoardTop>

                      <DayThingBoardEdit>
                      {
                        this.props.data.map(function(item , index){

                          return (
                             <DayThingItem id={item._id+ this.props.componentName.item} key={item._id+ this.props.componentName.item} 
                                draggable="true" onDragStart={this.drag.bind(this)} onDragEnter={this.dragenter.bind(this)} onDrop={this.itemDrop.bind(this)} onDragOver={this.allowDrop.bind(this) } onDragLeave = {this.dragleave.bind(this)} omDragEnd={this.dragleave.bind(this)}> 
                                <DayThingIsFinishLabel htmlFor={item._id+ this.props.componentName.isFinish}>
                                <DayThingIsFinish id ={item._id+ this.props.componentName.isFinish}  ref={item._id+ this.props.componentName.isFinish}  type="checkbox" defaultChecked={item.isFinish} onChange={this.updateThingDB.bind(this)} />
                                <DayThingIsFinishMark></DayThingIsFinishMark>
                              </DayThingIsFinishLabel>
                              <DayThingText id={item._id} ref={item._id} onChange={this.updateThingDB.bind(this)}  defaultValue = {item.thing}>      
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
