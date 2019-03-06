

 const reducer = (state =[], action) => {

  switch (action.type) {
    case "SET_DAYTHING":
        console.log(action.data);
        state = action.data;
        return state;
    case "ADD_DAYTHING":
        return [...state , {isFinish:false , text:"" , _id:action.data.id}];
    case "DEL_DAYTHING":
        var newState= _.remove(state , (val) => ( val._id !=action.data.id));
        return newState;
    case "UPDATE_DAYTHING":    
        var index = _.findIndex(state , {_id:action.data.id});
        state[index].isFinish = action.data.isFinish;
        state[index].thing = action.data.thing;
        return state;
    default:
        return state;
  }
}

export default reducer;