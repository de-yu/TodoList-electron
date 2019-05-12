"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDayThingSort = updateDayThingSort;
exports.getDayThingIdAsync = getDayThingIdAsync;
exports.getDayThingAsync = getDayThingAsync;
exports.addDayThingAsync = addDayThingAsync;
exports.updateDayThingAsync = updateDayThingAsync;
exports.delDayThingAsync = delDayThingAsync;
exports.dragSortDayThing = exports.updateDayThing = exports.setDayThing = exports.delDayThing = exports.addDayThing = void 0;

var _main_graphql = _interopRequireDefault(require("./../../models/main_graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addDayThing = function addDayThing(_addDayThing) {
  return {
    type: "ADD_DAYTHING",
    data: _addDayThing
  };
};

exports.addDayThing = addDayThing;

var delDayThing = function delDayThing(_delDayThing) {
  return {
    type: "DEL_DAYTHING",
    data: _delDayThing
  };
};

exports.delDayThing = delDayThing;

var setDayThing = function setDayThing(_setDayThing) {
  return {
    type: "SET_DAYTHING",
    data: _setDayThing
  };
};

exports.setDayThing = setDayThing;

var dragSortDayThing = function dragSortDayThing(_dragSortDayThing) {
  return {
    type: "DRAGSORT_DAYTHING",
    data: _dragSortDayThing
  };
};

exports.dragSortDayThing = dragSortDayThing;

var updateDayThing = function updateDayThing(_updateDayThing) {
  return {
    type: "UPDATE_DAYTHING",
    data: _updateDayThing
  };
};

exports.updateDayThing = updateDayThing;

function getDayThingIdAsync(date) {
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _main_graphql.default)("\n            query getDayThingId($date: String)\n            {\n              getDayThingId(date: $date)\n            }\n     ", {
                date: date
              });

            case 2:
              data = _context.sent;
              return _context.abrupt("return", data['data']['getDayThingId']);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }))
  );
}

function getDayThingAsync(id) {
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _main_graphql.default)("\n      query getThing($id : [ID!])\n      {\n        getThing(id:$id){\n            isFinish\n            thing\n            _id\n        }\n      }\n      ", {
                id: id
              });

            case 2:
              data = _context2.sent;
              return _context2.abrupt("return", data['data']['getThing']);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }))
  );
}

function addDayThingAsync(date) {
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var data;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _main_graphql.default)("mutation newThing($date:String){\n               newThing(date:$date){\n                    thing\n                    _id\n                }\n            }\n           ", {
                date: date
              });

            case 2:
              data = _context3.sent;
              return _context3.abrupt("return", data['data']['newThing']);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }))
  );
}

function updateDayThingAsync(id, isFinish, thing) {
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var data;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _main_graphql.default)("\n                mutation updateThing($id:ID! ,$isFinish:Boolean ,  $text:String)\n                {\n                    updateThing(id:$id ,isFinish:$isFinish, text:$text)                  \n                }\n            ", {
                id: id,
                isFinish: isFinish,
                text: thing
              });

            case 2:
              data = _context4.sent;
              return _context4.abrupt("return", data);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }))
  );
}

function updateDayThingSort(date, id) {
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      var data;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (0, _main_graphql.default)("\n          mutation updateThingSort($date:String ,  $id: [ID!])\n          {\n            updateThingSort(date:$date , id:$id)\n          }\n        ", {
                date: date,
                id: id
              });

            case 2:
              data = _context5.sent;
              return _context5.abrupt("return", data);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }))
  );
}

function delDayThingAsync(date, id) {
  return (
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6() {
      var data;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return (0, _main_graphql.default)("\n                    mutation delThing($date:String , $id:ID!)\n                    {\n                        delThing(date:$date , id:$id)\n                    }\n                ", {
                date: date,
                id: id
              });

            case 2:
              data = _context6.sent;
              return _context6.abrupt("return", data);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }))
  );
}