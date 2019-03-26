
import React from 'react';
import {Main} from './StyleComponent/Main'
import {FinishBoard, BoardHeader, Header, Content, ContentBlock, Date, DateNum, ThingBlock,ThingMarker , ThingItem, Thing , Footer} from './StyleComponent/FinishThing'
import ql from "./../../../application/models/main_graphql"

export default class FinishThing extends React.Component{
    constructor (props){
        super()
        this.state = {
            data: [],
        };
    }
    async componentDidMount (){

        var data = await ql(`{
                getFinishThing{
                    thing
                    date
                    _id
                }
        }`);
            console.log(data);
        data = data['data']['getFinishThing'];
        var groupData = _.groupBy(data, function (value){
            return value.date;
        });
        this.setState({data: groupData});
    }
    createMarkup (thing){
        return {__html: thing};
    }
    render (){
        const element = [];

        _.forEach(this.state.data, function (value, key){

            var thingList = value.map(function (thing){
                return (
                <ThingItem key={thing._id} >
                    <ThingMarker></ThingMarker>
                    <Thing dangerouslySetInnerHTML={this.createMarkup(thing.thing)}>
                    </Thing>
                </ThingItem>)
            }.bind(this))

            element.push(
            <ContentBlock key={key}>
                <Date>
                    <DateNum>{key}</DateNum>
                </Date>
                <ThingBlock> {thingList}</ThingBlock>
            </ContentBlock>);
        }.bind(this))


        return(
                    <Main>
                    <FinishBoard>
                        <BoardHeader>
                           <Header>
                           已完成事項
                           </Header>
                        </BoardHeader>
                        <Content >
                            {element}
                        </Content>
                        <Footer>
                        </Footer>       
                    </FinishBoard>
                </Main>
                );
    }
}