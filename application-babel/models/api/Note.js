"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Nedb = require('nedb');

var NoteCon = new Nedb({
  filename: './save/Note.db'
});

var Note =
/*#__PURE__*/
function () {
  function Note() {
    _classCallCheck(this, Note);
  }

  _createClass(Note, null, [{
    key: "newNote",
    value: function newNote() {
      NoteCon.loadDatabase();
      var doc = {
        note: ""
      };
      return new Promise(function (resolve, reject) {
        NoteCon.findOne({}, function (err, docs) {
          if (docs === null) {
            NoteCon.insert(doc, function (err, newDocs) {
              resolve("");
            });
          } else {
            resolve("already have db");
          }
        });
      });
    }
  }, {
    key: "getNote",
    value: function getNote() {
      NoteCon.loadDatabase();
      return new Promise(function (resolve, reject) {
        NoteCon.findOne({}, function (err, docs) {
          console.log(docs);
          resolve({
            id: docs['_id'],
            text: docs['note']
          });
        });
      });
    }
  }, {
    key: "updateNote",
    value: function updateNote(_ref) {
      var id = _ref.id,
          text = _ref.text;
      NoteCon.loadDatabase();
      return new Promise(function (resolve, reject) {
        NoteCon.update({
          _id: id
        }, {
          $set: {
            note: text
          }
        }, function (err, newDocs) {
          if (err === null) {
            resolve({
              status: "success",
              text: text
            });
          } else {
            reject({
              status: "fail",
              text: err
            });
          }
        });
      });
    }
  }]);

  return Note;
}();

exports.default = Note;