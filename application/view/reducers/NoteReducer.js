import ql from "./../../../application/models/main_graphql"


 const reducer = (state={note:"" , id:""}, action) => {

  switch (action.type) {
    case 'update':
      return {'note':"" , id:""};
    default:
      return {'note':"" , id:""};
  }
}

export default reducer