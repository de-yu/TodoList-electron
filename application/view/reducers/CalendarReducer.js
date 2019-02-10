

 const reducer = (state = {date:{}}, action) => {

  switch (action.type) {
     case 'setDate':
      return {date:action.data};
    default:
      return {date:state['date']};
  }
}

export default reducer