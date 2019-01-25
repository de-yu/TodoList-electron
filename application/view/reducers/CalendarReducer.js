

 const reducer = (state = {date:[""]}, action) => {

  switch (action.type) {
     case 'setDate':
      return {note:action.data['date']};
    default:
      return {note:state['date']};
  }
}

export default reducer