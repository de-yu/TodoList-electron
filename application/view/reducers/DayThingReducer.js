

 const reducer = (state =[], action) => {

  switch (action.type) {
    case "SET_DAYTHING":
        state = action.data;
        return state;
    case "DRAGSORT_DAYTHING":
      
      var moveIndex = _.findIndex(state , {_id:action.data.moveId});
      var targetIndex = _.findIndex(state , {_id:action.data.targetId});

      state.splice(targetIndex , 0 , state[moveIndex])
      
      var movechange = Math.min(moveIndex - targetIndex , 1);
      movechange = Math.max(movechange , -1);
      state.splice(moveIndex+movechange , 1);

      return state;
    case "ADD_DAYTHING":
        return [...state , {isFinish:false , text:"" , _id:action.data.id}];
    case "DEL_DAYTHING":
        var newState= _.remove(state , (val) => ( val._id !=action.data.id));
        return newState;
    case "UPDATE_DAYTHING":    
      console.log(action.data.thing);
        var index = _.findIndex(state , {_id:action.data.id});
        state[index].isFinish = action.data.isFinish;
        state[index].thing = action.data.thing;
        return state;
    default:
        return state;
  }
}

export default reducer;