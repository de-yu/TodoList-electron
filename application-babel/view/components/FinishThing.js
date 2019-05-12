"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Main = require("./StyleComponent/Main");

var _FinishThing = require("./StyleComponent/FinishThing");

var _main_graphql = _interopRequireDefault(require("./../../models/main_graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FinishThing =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FinishThing, _React$Component);

  function FinishThing(props) {
    var _this;

    _classCallCheck(this, FinishThing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FinishThing).call(this));
    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(FinishThing, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var data, groupData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _main_graphql.default)("{\n                getFinishThing{\n                    thing\n                    date\n                    _id\n                }\n        }");

              case 2:
                data = _context.sent;
                data = data['data']['getFinishThing'];
                groupData = _.groupBy(data, function (value) {
                  return value.date;
                });
                this.setState({
                  data: groupData
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "createMarkup",
    value: function createMarkup(thing) {
      return {
        __html: thing
      };
    }
  }, {
    key: "render",
    value: function render() {
      var element = [];
      var date_keys = Object.keys(this.state.data).sort().reverse();

      _.forEach(date_keys, function (key) {
        var thingList = this.state.data[key].map(function (thing) {
          return _react.default.createElement(_FinishThing.ThingItem, {
            key: thing._id
          }, _react.default.createElement(_FinishThing.ThingMarker, null), _react.default.createElement(_FinishThing.Thing, {
            dangerouslySetInnerHTML: this.createMarkup(thing.thing)
          }));
        }.bind(this));
        element.push(_react.default.createElement(_FinishThing.ContentBlock, {
          key: key
        }, _react.default.createElement(_FinishThing.Date, null, _react.default.createElement(_FinishThing.DateNum, null, key)), _react.default.createElement(_FinishThing.ThingBlock, null, " ", thingList)));
      }.bind(this));

      return _react.default.createElement(_Main.Main, null, _react.default.createElement(_FinishThing.FinishBoard, null, _react.default.createElement(_FinishThing.BoardHeader, null, _react.default.createElement(_FinishThing.Header, null, "\u5DF2\u5B8C\u6210\u4E8B\u9805")), _react.default.createElement(_FinishThing.Content, null, element), _react.default.createElement(_FinishThing.Footer, null)));
    }
  }]);

  return FinishThing;
}(_react.default.Component);

exports.default = FinishThing;