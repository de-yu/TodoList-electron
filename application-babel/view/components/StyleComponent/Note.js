"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoteBoardEdit = exports.NoteBoardTop = exports.NoteBoard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  border:0;\n  padding:0;\n  margin-bottom:-3px;\n  width:100%;\n  height:100%;\n  min-height:500px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background:#444;\n  height:45px;\n  width:100%;\n  padding-right:1px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  top:20px;\n  background:#fff;\n  width:70%;\n  margin:0 auto;\n  margin-bottom:50px;\n  box-shadow:0px 1px 3px 1px #bbb; \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NoteBoard = _styledComponents.default.div(_templateObject());

exports.NoteBoard = NoteBoard;

var NoteBoardTop = _styledComponents.default.div(_templateObject2());

exports.NoteBoardTop = NoteBoardTop;

var NoteBoardEdit = _styledComponents.default.textarea(_templateObject3());

exports.NoteBoardEdit = NoteBoardEdit;