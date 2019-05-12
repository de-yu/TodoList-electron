"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* global _ */
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    date: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'setDate':
      return {
        date: action.data
      };

    case 'delDate':
      return {
        date: _.remove(state['date'], function (val) {
          return val !== action.data;
        })
      };

    case 'newDate':
      return {
        date: _.uniq(state['date'].concat([action.data])).sort()
      };

    default:
      return {
        date: state['date']
      };
  }
};

var _default = reducer;
exports.default = _default;