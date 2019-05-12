"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaitBoard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position:relative;\n  top:20px;\n  background:#fff;\n  width:70%;\n  margin:0 auto;\n  margin-bottom:50px;\n  box-shadow:0px 1px 3px 1px #bbb; \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WaitBoard = _styledComponents.default.div(_templateObject());

exports.WaitBoard = WaitBoard;