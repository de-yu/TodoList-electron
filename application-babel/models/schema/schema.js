"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _require = require('graphql'),
    buildSchema = _require.buildSchema;

var schema = buildSchema("\n\ntype Note\n{\n  id: ID\n  text: String\n}\n\n type DayThing{\n  isFinish:Boolean\n  thing:String\n  date:String\n  _id:String\n} \n\ntype DmlStatus{\n  status:String\n  text:String\n}\n\ntype Query {\n  getDayThingId(date: String): [String]\n  getThing(id:[ID!]):[DayThing]\n  getComingNotes(date: [String]): [DayThing]\n  getCalendar:[String]\n  getNote:Note\n  getFinishThing:[DayThing]\n  getWaitThing:[DayThing]\n}\n\ntype Mutation {\n  newNote: String\n  updateNote(id:ID! , text: String): DmlStatus\n  newDate(date: String):String\n  delDate(date: String):String\n\n  newThing(date: String): DayThing\n  delThing(date: String , id: ID!): Int\n  updateThing(id: ID! ,isFinish:Boolean, text:String):Int\n  updateThingSort(date: String , id: [ID!]): Int\n}\n\n");
var _default = schema;
exports.default = _default;