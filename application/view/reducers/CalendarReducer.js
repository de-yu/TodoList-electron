
var _ = require('lodash');

const reducer = (state = {date:[]}, action) => {

    switch (action.type) {
        case 'setDate':
            return {date: action.data};
        case 'delDate':
            return {date: _.remove(state['date'] , (val)=> (val!==action.data))};
        case 'newDate':
            return {date: _.uniq([...state['date'] , action.data]).sort()};
        default:
            return {date: state['date']};
    }
}

export default reducer