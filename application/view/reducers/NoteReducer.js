

 const reducer = (state = {note:"" , id:""}, action) => {

  switch (action.type) {
     case 'setNote':
      return {note:action.data['note'] , id:action.data['id']};
    default:
      return {note:state['note'] , id:state['id']};
  }
}

export default reducer