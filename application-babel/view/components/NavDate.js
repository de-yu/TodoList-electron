"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavDate = require("./StyleComponent/NavDate");

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

var NavDate =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(NavDate, _React$PureComponent);

  function NavDate(props) {
    _classCallCheck(this, NavDate);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavDate).call(this, props));
  }

  _createClass(NavDate, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var date;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.getDate();

              case 2:
                date = _context.sent;
                this.props.setDate(date);

              case 4:
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
    key: "newDate",
    value: function newDate() {
      var dateInput = this.refs.dateInput.value;
      this.refs.dateInput.value = "";

      if (dateInput.match(/[\d]{4}-[\d]{2}-[\d]{2}/)) {
        this.props.newDateAsync(dateInput).then(function (data) {
          console.log(data);
        });
        this.props.newDate(dateInput);
      }
    }
  }, {
    key: "allowDrop",
    value: function allowDrop(ev) {
      ev.preventDefault();
    }
  }, {
    key: "drag",
    value: function drag(ev) {
      console.log("drag");
      ev.dataTransfer.setData("Text", ev.target.id);
    }
  }, {
    key: "drop",
    value: function drop(ev) {
      ev.preventDefault();
      var date = ev.dataTransfer.getData("Text");
      this.props.delDateAsync(date).then(function (data) {
        console.log(data);
      });
      this.props.delDate(date);
    }
  }, {
    key: "render",
    value: function render() {
      var cal = [];

      if (this.props.date !== null) {
        var group = _.groupBy(this.props.date, function (val) {
          return val.substring(0, 4);
        });

        _.forEach(group, function (value, key) {
          group[key] = _.groupBy(value, function (val) {
            return val.substring(5, 7);
          });
        });

        _.forEach(group, function (value_1, key_1) {
          var months = [];
          var months_keys = Object.keys(value_1).sort();

          for (var i = 0; i < months_keys.length; i++) {
            var value_2 = value_1[months_keys[i]];
            var days = [];

            _.forEach(value_2, function (value_3) {
              days.push(_react.default.createElement(_NavDate.Day, {
                id: value_3,
                key: value_3,
                draggable: "true",
                onDragStart: this.drag.bind(this)
              }, _react.default.createElement(_NavDate.DayLink, {
                id: value_3,
                to: "/DayThing/" + value_3.replace(/-/g, "/")
              }, value_3.substring(8, 10))));
            }.bind(this));

            months.push(_react.default.createElement(_NavDate.Month, {
              key: months_keys[i]
            }, _react.default.createElement(_NavDate.MonthNum, null, _react.default.createElement(_NavDate.Num, null, months_keys[i])), _react.default.createElement(_NavDate.MonthDays, null, days)));
          }

          cal.push(_react.default.createElement(_NavDate.Year, {
            key: key_1
          }, _react.default.createElement(_NavDate.YearNum, null, key_1), _react.default.createElement(_NavDate.AllMonth, null, months)));
        }.bind(this));
      }

      return _react.default.createElement(_NavDate.NavCalendar, null, _react.default.createElement(_NavDate.DateControl, null, _react.default.createElement(_NavDate.DateInput, {
        ref: "dateInput",
        type: "date"
      }), _react.default.createElement(_NavDate.NewDateButton, {
        onClick: this.newDate.bind(this),
        title: "\u9078\u597D\u65E5\u671F\u6309\u65B0\u589E"
      }, "NEW"), _react.default.createElement(_NavDate.DelDateButton, {
        onDrop: this.drop.bind(this),
        onDragOver: this.allowDrop.bind(this),
        title: "\u62D6\u66F3\u65E5\u671F\u522A\u9664"
      }, "DEL")), _react.default.createElement(_NavDate.Calendar, null, cal));
    }
  }]);

  return NavDate;
}(_react.default.PureComponent);

exports.default = NavDate;