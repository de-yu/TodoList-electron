
import React from "react";
import DayThing from '../components/DayThing';
import {connect} from 'react-redux'


const mapStateToProps = state => ({data:state.DayThing})

const mapDispatchToProps = (dispatch , props) => ({});


var newDayThing = connect(mapStateToProps, mapDispatchToProps)(DayThing);

export default newDayThing;