"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavDate = _interopRequireDefault(require("../components/NavDate"));

var _NavDate2 = require("../actions/NavDate");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    date: state.Calendar.date
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    getDate: function getDate() {
      return dispatch((0, _NavDate2.getDateAsync)());
    },
    newDateAsync: function newDateAsync(date) {
      return dispatch((0, _NavDate2.newDateAsync)(date));
    },
    delDateAsync: function delDateAsync(date) {
      return dispatch((0, _NavDate2.delDateAsync)(date));
    },
    newDate: function newDate(date) {
      dispatch((0, _NavDate2.newDate)(date));
    },
    delDate: function delDate(date) {
      dispatch((0, _NavDate2.delDate)(date));
    },
    setDate: function setDate(data) {
      dispatch((0, _NavDate2.setDate)(data));
    }
  };
};

var newNavDate = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_NavDate.default);
var _default = newNavDate;
exports.default = _default;