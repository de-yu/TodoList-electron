

 const reducer = (state =[{isFinish:false , text:"abcd"} , {isFinish:true , text:"456789"}], action) => {
     console.log(state);
  switch (action.type) {
      case "ADD_DAYTHING":
        return [...state , {isFinish:false , text:"123"}];
    case "DEL_DAYTHING":
        return state;
    default:
        return state;
  }
}

export default reducer;