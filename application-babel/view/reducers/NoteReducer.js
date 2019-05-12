"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    note: "",
    id: ""
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'setNote':
      return {
        note: action.data['note'],
        id: action.data['id']
      };

    default:
      return {
        note: state['note'],
        id: state['id']
      };
  }
};

var _default = reducer;
exports.default = _default;