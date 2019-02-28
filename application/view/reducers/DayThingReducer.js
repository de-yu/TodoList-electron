

 const reducer = (state =[], action) => {

  switch (action.type) {
    case "SET_DAYTHING":
        return action.data;
    case "ADD_DAYTHING":
        return [...state , {isFinish:false , text:"" , _id:action.data.id}];
    case "DEL_DAYTHING":
        return state;
    default:
        return state;
  }
}

export default reducer;