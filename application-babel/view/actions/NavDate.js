"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateAsync = getDateAsync;
exports.delDateAsync = delDateAsync;
exports.newDateAsync = newDateAsync;
exports.newDate = exports.delDate = exports.setDate = void 0;

var _main_graphql = _interopRequireDefault(require("./../../models/main_graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setDate = function setDate(data) {
  return {
    type: 'setDate',
    data: data
  };
};

exports.setDate = setDate;

var delDate = function delDate(date) {
  return {
    type: 'delDate',
    data: date
  };
};

exports.delDate = delDate;

var newDate = function newDate(date) {
  return {
    type: 'newDate',
    data: date
  };
};

exports.newDate = newDate;

function getDateAsync() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _main_graphql.default)("{\n          getCalendar\n            }\n           ");

              case 2:
                data = _context.sent;
                return _context.abrupt("return", data['data']['getCalendar']);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function delDateAsync(date) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, state) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _main_graphql.default)("mutation delDate($date:String){\n               delDate(date:$date)\n            }\n           ", {
                  date: date
                });

              case 2:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function newDateAsync(date) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch, state) {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _main_graphql.default)("mutation newDate($date:String){\n               newDate(date:$date)\n            }\n           ", {
                  date: date
                });

              case 2:
                data = _context3.sent;
                return _context3.abrupt("return", data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}