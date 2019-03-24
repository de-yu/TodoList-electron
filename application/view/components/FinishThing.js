
import React from 'react';
import {Main} from './StyleComponent/Main'
import {FinishBoard, Tab, TabMark , TabMarkActive, TabContent, ContentBlock, Date,DateNum, ThingBlock, Thing} from './StyleComponent/FinishThing'
import ql from "./../../../application/models/main_graphql"

export default class FinishThing extends React.Component{
    constructor (props){
        super()
        this.state = {
            data: [],
        };
    }
    async componentDidMount (){
        
        var data = await ql(`
        query getFinishThing($year: String)
            {
                getFinishThing(year:$year){
                    thing
            date
            _id
                }
            }
        `
            ,{year:"2019"});
          data = data['data']['getFinishThing']
          var groupData = _.groupBy(data , function(value){
              return value.date;
          });
          this.setState({data:groupData})  ;
    }
         createMarkup(thing)
     {
       return {__html: thing};
     }
    render (){
        const element = [];

        _.forEach(this.state.data , function(value , key){

            var thingList = value.map(function(thing){
                return <Thing key={thing._id} dangerouslySetInnerHTML={this.createMarkup(thing.thing)}></Thing>
            }.bind(this))

            element.push(<ContentBlock key={key}><Date><DateNum>{key}</DateNum></Date><ThingBlock>{thingList}</ThingBlock></ContentBlock>);
        }.bind(this))
                            
        
        return(
                <Main>
                    <FinishBoard>
                        <Tab>
                            <TabMarkActive>
                            2019
                            </TabMarkActive>
                            <TabMark>
                            2018
                            </TabMark>
                            <TabMark>
                            2017
                            </TabMark>
                        </Tab>
                        <TabContent >
                        {element}
                        </TabContent>
                    </FinishBoard>
                </Main>
                );
    }
}