"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DayThing = _interopRequireDefault(require("../components/DayThing"));

var _DayThing2 = require("../actions/DayThing");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.DayThing.data,
    action: state.DayThing.action,
    componentName: {
      item: "-item",
      isFinish: "-isFinish"
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    addDayThing: function addDayThing(id) {
      dispatch((0, _DayThing2.addDayThing)({
        id: id
      }));
    },
    delDayThing: function delDayThing(id) {
      dispatch((0, _DayThing2.delDayThing)({
        id: id
      }));
    },
    setDayThing: function setDayThing(data) {
      dispatch((0, _DayThing2.setDayThing)(data));
    },
    updateDayThing: function updateDayThing(id, isFinish, thing) {
      dispatch((0, _DayThing2.updateDayThing)({
        id: id,
        isFinish: isFinish,
        thing: thing
      }));
    },
    dragSortDayThing: function dragSortDayThing(moveId, targetId) {
      dispatch((0, _DayThing2.dragSortDayThing)({
        moveId: moveId,
        targetId: targetId
      }));
    },
    updateSortDayThingAsync: function updateSortDayThingAsync(date, idSort) {
      return dispatch((0, _DayThing2.updateDayThingSort)(date, idSort));
    },
    getDayThingIdAsync: function getDayThingIdAsync(date) {
      return dispatch((0, _DayThing2.getDayThingIdAsync)(date));
    },
    getDayThingAsync: function getDayThingAsync(id) {
      return dispatch((0, _DayThing2.getDayThingAsync)(id));
    },
    addDayThingAsync: function addDayThingAsync(date) {
      return dispatch((0, _DayThing2.addDayThingAsync)(date));
    },
    updateDayThingAsync: function updateDayThingAsync(id, isFinish, thing) {
      return dispatch((0, _DayThing2.updateDayThingAsync)(id, isFinish, thing));
    },
    delDayThingAsync: function delDayThingAsync(date, id) {
      return dispatch((0, _DayThing2.delDayThingAsync)(date, id));
    }
  };
};

var newDayThing = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DayThing.default);
var _default = newDayThing;
exports.default = _default;