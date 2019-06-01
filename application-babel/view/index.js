"use strict";

var _reactRouterDom = require("react-router-dom");

var _reactRouter = require("react-router");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _CalendarReducer = _interopRequireDefault(require("./reducers/CalendarReducer"));

var _NoteReducer = _interopRequireDefault(require("./reducers/NoteReducer"));

var _DayThingReducer = _interopRequireDefault(require("./reducers/DayThingReducer"));

var _NavBar = _interopRequireDefault(require("./components/NavBar"));

var _CalendarContainer = _interopRequireDefault(require("./containers/CalendarContainer"));

var _MainRoute = _interopRequireDefault(require("./components/MainRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  Calendar: _CalendarReducer.default,
  Note: _NoteReducer.default,
  DayThing: _DayThingReducer.default
});
var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk.default));

var App = function App() {
  return _react.default.createElement("div", null, _react.default.createElement(_NavBar.default, null), _react.default.createElement(_CalendarContainer.default, null), _react.default.createElement(_MainRoute.default, null));
};

_reactDom.default.render(_react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(_reactRouterDom.HashRouter, null, _react.default.createElement(App, null))), document.getElementById('body'));