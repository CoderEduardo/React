/*O redux funciona da seguinte maneira, temos as actions, que envia para o reducer o que ele vai fazer com o state, temos o dispatch, que funciona como
um middleware, agindo no meio das actions e do reducer, temos o reducer que manipula o estado em si, e também temos o state, que é o proprio estado*/
const redux = require("redux")
const createStore = redux.createStore
const {incrementAction, decrementAction} = require('./actions/CounterActions')
const {addItemAction} = require('./actions/ListActions')
const counterReducer = require("./reducers/CounterReducers")
const {listReducer} = require('./reducers/Listreducers')
//Método para usar mais de um reducer
const combineReducer = redux.combineReducers

const allReducers = combineReducer({
    counter:counterReducer,
    list:listReducer
})

//criando a nossa store com o proprio método
const store = createStore(allReducers)

//atualizando sempre que o alguna coisa é atualizada
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addItemAction("Um novo item"))
store.dispatch(decrementAction(10))

