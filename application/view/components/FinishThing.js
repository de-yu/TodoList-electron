
import React from 'react';
import {Main} from './StyleComponent/Main'
import {FinishBoard, Tab, TabMark, TabContent, ContentBlock, Date, ThingBlock, Thing} from './StyleComponent/FinishThing'

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
                            <TabMark>
                            2019
                            </TabMark>
                            <TabMark>
                            2018
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