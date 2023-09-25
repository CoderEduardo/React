//Reducer que recebe a action que altera o estado
const listReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        default:
            return state
    }
}

module.exports = {listReducer}