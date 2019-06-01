"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Nedb = require('nedb');

var _ = require('lodash');

var thing = new Nedb({
  filename: './save/Thing.db'
});

var DayThing =
/*#__PURE__*/
function () {
  function DayThing() {
    _classCallCheck(this, DayThing);
  }

  _createClass(DayThing, null, [{
    key: "getThing",
    value: function getThing(_ref) {
      var id = _ref.id;
      thing.loadDatabase();
      return new Promise(function (resolve, reject) {
        thing.find({
          _id: {
            $in: id
          }
        }, function (err, docs) {
          resolve(docs);
        });
      });
    }
  }, {
    key: "getWaitThing",
    value: function getWaitThing(_ref2) {
      var id = _ref2.id;
      thing.loadDatabase();
      return new Promise(function (resolve, reject) {
        thing.find({
          _id: {
            $in: id
          },
          isFinish: false
        }, function (err, docs) {
          resolve(docs);
        });
      });
    }
  }, {
    key: "getFinishThing",
    value: function getFinishThing(_ref3) {
      var id = _ref3.id;
      thing.loadDatabase();
      return new Promise(function (resolve, reject) {
        thing.find({
          _id: {
            $in: id
          },
          isFinish: true
        }, function (err, docs) {
          resolve(docs);
        });
      });
    }
  }, {
    key: "newThing",
    value: function newThing(_ref4) {
      var date = _ref4.date;
      thing.loadDatabase();
      var thingDoc = {
        isFinish: false,
        thing: "",
        date: date
      };
      return new Promise(function (resolve, reject) {
        thing.insert(thingDoc, function (err, newDocs) {
          resolve(newDocs);
        });
      });
    }
  }, {
    key: "delThing",
    value: function delThing(_ref5) {
      var id = _ref5.id;
      thing.loadDatabase();
      return new Promise(function (resolve, reject) {
        thing.remove({
          _id: id
        }, function (err, numRemoved) {
          resolve(numRemoved);
        });
      });
    }
  }, {
    key: "updateThing",
    value: function updateThing(_ref6) {
      var id = _ref6.id,
          isFinish = _ref6.isFinish,
          text = _ref6.text;
      thing.loadDatabase();
      return new Promise(function (resolve, reject) {
        thing.update({
          _id: id
        }, {
          $set: {
            thing: text,
            isFinish: isFinish
          }
        }, {}, function (err, numReplace) {
          resolve(numReplace);
        });
      });
    }
  }]);

  return DayThing;
}();

exports.default = DayThing;