"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Note = _interopRequireDefault(require("../components/Note"));

var _Note2 = require("../actions/Note");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    note: state.Note.note,
    id: state.Note.id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    newNote: function newNote() {
      return dispatch((0, _Note2.newNote)());
    },
    getNote: function getNote() {
      return dispatch((0, _Note2.getNote)());
    },
    saveNote: function saveNote(note) {
      return dispatch((0, _Note2.saveNote)(note));
    },
    setNote: function setNote(id, note) {
      dispatch((0, _Note2.setNote)({
        note: note,
        id: id
      }));
    },
    dispatch: dispatch
  };
};

var NewNote = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Note.default);
var _default = NewNote;
exports.default = _default;