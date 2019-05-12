"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ql;

var _schema = _interopRequireDefault(require("./schema/schema"));

var _Note = _interopRequireDefault(require("./api/Note"));

var _DayThing = _interopRequireDefault(require("./api/DayThing"));

var _Calendar = _interopRequireDefault(require("./api/Calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global _ */
var _require = require('graphql'),
    graphql = _require.graphql,
    buildSchema = _require.buildSchema;

var rootValue = {
  getDayThingId: _Calendar.default.getDayThingId,
  getNote: _Note.default.getNote,
  getThing: _DayThing.default.getThing,
  getCalendar: _Calendar.default.getCalendar,
  getWaitThing: function getWaitThing() {
    return new Promise(function (resolve, reject) {
      _Calendar.default.geAllThingId().then(function (allThingId) {
        _DayThing.default.getWaitThing({
          id: allThingId
        }).then(function (waitThing) {
          resolve(waitThing);
        });
      });
    });
  },
  getFinishThing: function getFinishThing() {
    return new Promise(function (resolve, reject) {
      _Calendar.default.geAllThingId().then(function (allThingId) {
        _DayThing.default.getFinishThing({
          id: allThingId
        }).then(function (finishThing) {
          resolve(finishThing);
        });
      });
    });
  },
  newNote: _Note.default.newNote,
  updateNote: _Note.default.updateNote,
  newDate: _Calendar.default.newDate,
  delDate: _Calendar.default.delDate,
  newThing: function newThing(_ref) {
    var date = _ref.date;
    return new Promise(function (resolve, reject) {
      _DayThing.default.newThing({
        date: date
      }).then(function (newThingData) {
        _Calendar.default.updateDayThingId({
          date: date,
          thingId: newThingData._id
        }).then(function (updateDayThingIdData) {
          resolve(newThingData);
        });
      });
    });
  },
  delThing: function delThing(_ref2) {
    var date = _ref2.date,
        id = _ref2.id;
    return new Promise(function (resolve, reject) {
      _DayThing.default.delThing({
        id: id
      }).then(function (delThingData) {
        console.log(date, id);

        _Calendar.default.delDayThingId({
          date: date,
          thingId: id
        }).then(function (delDayThingIdData) {
          resolve(delDayThingIdData);
        });
      });
    });
  },
  updateThing: _DayThing.default.updateThing,
  updateThingSort: _Calendar.default.updateDayThingSort
};

function ql(query, values) {
  return graphql(_schema.default, query, rootValue, '', values);
}

;