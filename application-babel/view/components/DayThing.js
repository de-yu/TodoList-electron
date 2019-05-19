"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Main = require("./StyleComponent/Main");

var _DayThing = require("./StyleComponent/DayThing");

var _jquery = _interopRequireDefault(require("jquery"));

var _autosize = _interopRequireDefault(require("autosize"));

var _striptags = _interopRequireDefault(require("striptags"));

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

var DayThing =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DayThing, _React$Component);

  function DayThing(props) {
    var _this;

    _classCallCheck(this, DayThing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DayThing).call(this, props));
    _this.temp = {
      dragid: "",
      targetid: "",
      targetclass: ""
    };
    return _this;
  }

  _createClass(DayThing, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var id, thing;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.thingDate = _.join([this.props.match.params.Year, this.props.match.params.Month, this.props.match.params.Day], "-");
                _context.next = 3;
                return this.props.getDayThingIdAsync(this.thingDate);

              case 3:
                id = _context.sent;
                _context.next = 6;
                return this.props.getDayThingAsync(id);

              case 6:
                thing = _context.sent;
                this.props.setDayThing(thing);

              case 8:
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
    key: "updateThingProps",
    value: function updateThingProps() {
      this.props.data.forEach(function (item, key) {
        this.props.updateDayThing(item._id, this.refs[item._id + this.props.componentName.isFinish].checked, this.refs[item._id].value);
      }.bind(this));
    }
  }, {
    key: "addThing",
    value: function addThing() {
      this.updateThingProps();
      this.props.addDayThingAsync(this.thingDate).then(function (newdoc) {
        this.props.addDayThing(newdoc._id);
      }.bind(this));
    }
  }, {
    key: "updateThingDB",
    value: function updateThingDB(event) {
      var id = event.target.id.split("-")[0];
      var text = (0, _striptags.default)(this.refs[id].value);
      this.updateThingProps();
      this.props.updateDayThingAsync(id, this.refs[id + this.props.componentName.isFinish].checked, text).then(function (data) {
        console.log(data);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.action == "ADD_DAYTHING") {
        var focusElement = this.props.data[this.props.data.length - 1]._id;
        this.refs[focusElement].focus();
      }

      this.props.data.map(function (item, index) {
        (0, _autosize.default)((0, _jquery.default)("#" + item._id));
      });
    }
  }, {
    key: "dragenter",
    value: function dragenter(ev) {
      if (ev.target.id !== "") {
        this.temp.targetid = ev.target.id.replace("-item", "");
        this.temp.targetid = this.temp.targetid.replace("-isfinish", "");
        (0, _jquery.default)("#" + this.temp.targetid + this.props.componentName.item).addClass("in-drag");
      }
    }
  }, {
    key: "dragleave",
    value: function dragleave(ev) {
      if (ev.target.id !== "") {
        var removeClassId = ev.target.id.replace("-item", "");
        removeClassId = removeClassId.replace("-isfinish", "");
        (0, _jquery.default)("#" + removeClassId + this.props.componentName.item).removeClass("in-drag");
      }
    }
  }, {
    key: "allowDrop",
    value: function allowDrop(ev) {
      ev.preventDefault();
      ev.dataTransfer.dropEffect = 'move';

      if (ev.target.id !== "") {
        this.temp.targetid = ev.target.id.replace("-item", "");
        this.temp.targetid = this.temp.targetid.replace("-isfinish", "");
        (0, _jquery.default)("#" + this.temp.targetid + this.props.componentName.item).addClass("in-drag");
      }
    }
  }, {
    key: "drag",
    value: function drag(ev) {
      ev.dataTransfer.effectAllowed = 'move';
      this.temp.dragid = ev.target.id.replace("-item", "");
    }
  }, {
    key: "itemDrop",
    value: function itemDrop(ev) {
      (0, _jquery.default)("#" + this.temp.targetid + this.props.componentName.item).removeClass("in-drag");
      this.props.dragSortDayThing(this.temp.dragid, this.temp.targetid);

      var ids = _.map(this.props.data, '_id');

      this.props.updateSortDayThingAsync(this.thingDate, ids).then(function (data) {
        console.log(data);
      });
    }
  }, {
    key: "deleteDrop",
    value: function deleteDrop(ev) {
      ev.preventDefault();
      this.updateThingProps();
      var id = this.temp.dragid;
      this.props.delDayThingAsync(this.thingDate, id).then(function (data) {
        this.props.delDayThing(id);
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.data);
      return _react.default.createElement(_Main.Main, null, _react.default.createElement(_DayThing.DayThingBoard, null, _react.default.createElement(_DayThing.DayThingBoardTop, null, _react.default.createElement(_DayThing.DayThingAdd, {
        onClick: this.addThing.bind(this)
      }, "NEW"), _react.default.createElement(_DayThing.DayThingDel, {
        onDrop: this.deleteDrop.bind(this),
        onDragOver: this.allowDrop.bind(this),
        title: "\u62D6\u66F3\u4E8B\u9805\u522A\u9664"
      }, "DEL")), _react.default.createElement(_DayThing.DayThingBoardEdit, null, this.props.data.map(function (item, index) {
        console.log(item);
        return _react.default.createElement(_DayThing.DayThingItem, {
          id: item._id + this.props.componentName.item,
          key: item._id + this.props.componentName.item,
          draggable: "true",
          onDragStart: this.drag.bind(this),
          onDragEnter: this.dragenter.bind(this),
          onDrop: this.itemDrop.bind(this),
          onDragOver: this.allowDrop.bind(this),
          onDragLeave: this.dragleave.bind(this),
          omDragEnd: this.dragleave.bind(this)
        }, _react.default.createElement(_DayThing.DayThingIsFinishLabel, {
          htmlFor: item._id + this.props.componentName.isFinish
        }, _react.default.createElement(_DayThing.DayThingIsFinish, {
          id: item._id + this.props.componentName.isFinish,
          ref: item._id + this.props.componentName.isFinish,
          type: "checkbox",
          defaultChecked: item.isFinish,
          onChange: this.updateThingDB.bind(this)
        }), _react.default.createElement(_DayThing.DayThingIsFinishMark, null)), _react.default.createElement(_DayThing.DayThingText, {
          id: item._id,
          ref: item._id,
          onChange: this.updateThingDB.bind(this),
          defaultValue: item.thing
        }));
      }.bind(this)))));
    }
  }]);

  return DayThing;
}(_react.default.Component);

exports.default = DayThing;