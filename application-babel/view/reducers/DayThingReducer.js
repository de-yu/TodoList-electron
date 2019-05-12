"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    data: [],
    action: ""
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  state.action = action.type;

  switch (action.type) {
    case "SET_DAYTHING":
      state.data = action.data;
      return state;

    case "DRAGSORT_DAYTHING":
      var moveIndex = _.findIndex(state.data, {
        _id: action.data.moveId
      });

      var targetIndex = _.findIndex(state.data, {
        _id: action.data.targetId
      });

      var moveDirection = 0;

      if (moveIndex < targetIndex) {
        moveDirection = 1;
      }

      state.data.splice(targetIndex + moveDirection, 0, state.data[moveIndex]);
      var movechange = Math.min(moveIndex - targetIndex, 1);
      movechange = Math.max(movechange, 0);
      state.data.splice(moveIndex + movechange, 1);
      console.log(state);
      return state;

    case "ADD_DAYTHING":
      state.data = state.data.concat([{
        isFinish: false,
        text: "",
        _id: action.data.id
      }]);
      return state;

    case "DEL_DAYTHING":
      state.data = _.remove(state.data, function (val) {
        return val._id != action.data.id;
      });
      return state;

    case "UPDATE_DAYTHING":
      var index = _.findIndex(state.data, {
        _id: action.data.id
      });

      state.data[index].isFinish = action.data.isFinish;
      state.data[index].thing = action.data.thing;
      return state;

    default:
      return state;
  }
};

var _default = reducer;
exports.default = _default;