"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CalendarCon = new Nedb({
  filename: './save/DayThing.db'
});

var Calendar =
/*#__PURE__*/
function () {
  function Calendar() {
    _classCallCheck(this, Calendar);
  }

  _createClass(Calendar, null, [{
    key: "getCalendar",
    value: function getCalendar(date) {
      CalendarCon.loadDatabase();
      return new Promise(function (resolve, reject) {
        CalendarCon.find({}).projection({
          date: 1,
          _id: 0
        }).sort({
          date: 1
        }).exec(function (err, docs) {
          var data = _.map(docs, 'date');

          resolve(data);
        });
      });
    }
  }, {
    key: "geAllThingId",
    value: function geAllThingId() {
      CalendarCon.loadDatabase();
      return new Promise(function (resolve, reject) {
        CalendarCon.find().sort({
          date: 0
        }).exec(function (err, docs) {
          var allThingId = _.map(docs, 'thing');

          allThingId = _.flatten(allThingId);
          resolve(allThingId);
        });
      });
    }
  }, {
    key: "delDate",
    value: function delDate(_ref) {
      var date = _ref.date;
      CalendarCon.loadDatabase();
      return new Promise(function (resolve, reject) {
        CalendarCon.remove({
          date: date
        }, function (err, numRemoved) {
          resolve(numRemoved);
        });
      });
    }
  }, {
    key: "newDate",
    value: function newDate(_ref2) {
      var date = _ref2.date;
      CalendarCon.loadDatabase();
      var doc = {
        date: date,
        thing: []
      };
      return new Promise(function (resolve, reject) {
        CalendarCon.findOne({
          date: date
        }, function (err, docs) {
          if (docs === null) {
            CalendarCon.insert(doc, function (err, newDocs) {
              resolve(date);
            });
          } else {
            resolve("already have date");
          }
        });
      });
    }
  }, {
    key: "getDayThingId",
    value: function getDayThingId(_ref3) {
      var date = _ref3.date;
      CalendarCon.loadDatabase();
      return new Promise(function (resolve, reject) {
        CalendarCon.find({
          date: date
        }, function (err, docs) {
          var thingId = docs[0]['thing'];
          resolve(thingId);
        });
      });
    }
  }, {
    key: "updateDayThingId",
    value: function updateDayThingId(_ref4) {
      var date = _ref4.date,
          thingId = _ref4.thingId;
      CalendarCon.loadDatabase();
      return new Promise(function (resolve, reject) {
        CalendarCon.find({
          date: date
        }, function (err, docs) {
          docs[0]['thing'].push(thingId);
          var newId = docs[0]['thing'];
          console.log(newId);
          CalendarCon.update({
            date: date
          }, {
            $set: {
              thing: newId
            }
          }, {}, function (err, numReplaced) {
            resolve(numReplaced);
          });
        });
      });
    }
  }, {
    key: "updateDayThingSort",
    value: function updateDayThingSort(_ref5) {
      var date = _ref5.date,
          id = _ref5.id;
      CalendarCon.loadDatabase();
      console.log(date, id);
      return new Promise(function (resolve, reject) {
        CalendarCon.update({
          date: date
        }, {
          $set: {
            thing: id
          }
        }, {}, function (err, numReplaced) {
          resolve(numReplaced);
        });
      });
    }
  }, {
    key: "delDayThingId",
    value: function delDayThingId(_ref6) {
      var date = _ref6.date,
          thingId = _ref6.thingId;
      CalendarCon.loadDatabase();
      return new Promise(function (resolve, reject) {
        CalendarCon.find({
          date: date
        }, function (err, docs) {
          var newId = _.remove(docs[0]['thing'], function (value) {
            return value != thingId;
          });

          CalendarCon.update({
            date: date
          }, {
            $set: {
              thing: newId
            }
          }, {}, function (err, numReplaced) {
            resolve(numReplaced);
          });
        });
      });
    }
  }]);

  return Calendar;
}();

exports.default = Calendar;