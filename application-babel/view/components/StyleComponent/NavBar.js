"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = exports.NavItem = exports.NavList = exports.Title = exports.Nav = void 0;

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-decoration:none;\n  color:#fff;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-family:\u5FAE\u8EDF\u6B63\u9ED1\u9AD4;\n    color:#fff;\n    margin-left:30px;\n    line-height:45px;\n    font-size:0.9em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 80%;\n    height:100%;\n    display:flex;\n    list-style-type:none;\n    margin-top:0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.5em;\n    text-align: center;\n    color: #fff;\n    width: 20%;\n    line-height:45px;\n    height:100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background:#545454;\n    position:fixed;\n    height: 45px;\n    width: 100%;\n    display:flex;\n    z-index:2;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents.default.div(_templateObject());

exports.Nav = Nav;

var Title = _styledComponents.default.div(_templateObject2());

exports.Title = Title;

var NavList = _styledComponents.default.ul(_templateObject3());

exports.NavList = NavList;

var NavItem = _styledComponents.default.li(_templateObject4());

exports.NavItem = NavItem;
var StyledLink = (0, _styledComponents.default)(_reactRouterDom.Link)(_templateObject5());
exports.StyledLink = StyledLink;