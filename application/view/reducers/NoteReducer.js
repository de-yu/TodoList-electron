import ql from "./../../../application/models/main_graphql"


 const reducer = (state = {note:"" , id:""}, action) => {

  switch (action.type) {
      case 'new':
      return {note:"" , id:""};
  case 'get':
      console.log(action.data);
      return {note:action.data + "hi" , id:""};
    case 'update':
      return {note:state['note'] + "hi" , id:""};
    default:
      return {note:state['note'] + "hi" , id:""};
  }
}

export default reducer