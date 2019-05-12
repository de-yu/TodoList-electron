"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.Thing = exports.ThingMarker = exports.ThingItem = exports.ThingBlock = exports.DateNum = exports.Date = exports.ContentBlock = exports.Content = exports.Header = exports.BoardHeader = exports.FinishBoard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    width:90%;\n    margin:0 auto;\n    height:60px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    line-height:20px;\n\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    position:relative;\n    min-width:18px;\n    height:18px;\n    border:1px solid #555;\n    margin-right:10px;\n    ::after\n    {   \n        margin-top: 2px;\n        margin-left:2px;\n        background:#555;\n        content:'';\n        width:14px;\n        height:14px;\n        display:block;\n    }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["   \n    margin-top:20px;\n    margin-bottom:20px;\n    font-family:\u5FAE\u8EDF\u6B63\u9ED1\u9AD4;\n    display:flex;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin-top:30px;\n    width:100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      background:#fff;\n      position:relative;\n      top:10px;\n      right:1px;\n      display:table;\n      margin:0 auto;\n      padding:0 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n    width:100%;\n    border-bottom:1px solid #aaa;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width:90%;\n    margin:0 auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-top:15px; \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width:90%;\n    line-height:60px;\n    color:#eee;\n    font-size:1.5em;\n    margin:0 auto;\n    font-family:\u5FAE\u8EDF\u6B63\u9ED1\u9AD4;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background:#444;\n    width:100%;\n    margin:0 auto;\n    margin-bottom:30px;\n    height:60px;\n"]);

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

var FinishBoard = _styledComponents.default.div(_templateObject());

exports.FinishBoard = FinishBoard;

var BoardHeader = _styledComponents.default.div(_templateObject2());

exports.BoardHeader = BoardHeader;

var Header = _styledComponents.default.p(_templateObject3());

exports.Header = Header;

var Content = _styledComponents.default.div(_templateObject4());

exports.Content = Content;

var ContentBlock = _styledComponents.default.div(_templateObject5());

exports.ContentBlock = ContentBlock;

var Date = _styledComponents.default.div(_templateObject6());

exports.Date = Date;

var DateNum = _styledComponents.default.span(_templateObject7());

exports.DateNum = DateNum;

var ThingBlock = _styledComponents.default.ul(_templateObject8());

exports.ThingBlock = ThingBlock;

var ThingItem = _styledComponents.default.li(_templateObject9());

exports.ThingItem = ThingItem;

var ThingMarker = _styledComponents.default.div(_templateObject10());

exports.ThingMarker = ThingMarker;

var Thing = _styledComponents.default.p(_templateObject11());

exports.Thing = Thing;

var Footer = _styledComponents.default.div(_templateObject12());

exports.Footer = Footer;