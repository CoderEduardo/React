export default function Contadorreducer(state = 5, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
            default:
                return state
    }   
}
