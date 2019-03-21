
import React from 'react';
import {Main} from './StyleComponent/Main'
import {FinishBoard, Tab, TabMark , TabMarkActive, TabContent, ContentBlock, Date, ThingBlock, Thing} from './StyleComponent/FinishThing'
import ql from "./../../../application/models/main_graphql"

export default class FinishThing extends React.Component{
    constructor (props){
        super()
    }
    async componentDidMount (){
        
    }
    render (){
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
                        <TabContent>
                            <ContentBlock>
                                <Date>
                                0318
                                </Date>
                                <ThingBlock>
                                    <Thing>事項一</Thing>
                                    <Thing>事項二</Thing>
                                    
                                </ThingBlock>
                            </ContentBlock>
                
                        </TabContent>
                    </FinishBoard>
                </Main>
                );
    }
}