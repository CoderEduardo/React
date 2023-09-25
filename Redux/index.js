/*O redux funciona da seguinte maneira, temos as actions, que envia para o reducer o que ele vai fazer com o state, temos o dispatch, que funciona como
um middleware, agindo no meio das actions e do reducer, temos o reducer que manipula o estado em si, e também temos o state, que é o proprio estado*/

const redux = require("redux")
const createStore = redux.createStore

//Criando um objeto para atribuir uma ação
const incrementAction = (value = 1) => {
    return {type:"INCREMENT",payload:value}
}
const decrementAction = (value = 1) =>{
    return {type:"DECREMENT", payload:value}
}

//criando o reducer
//O switch case identifica o tipo da ação, e exeecuta o código correspondente
function counterReducer(state = 0, action) {

    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - action.payload
        default:
            return state
    }

}

//criando a nossa store com o proprio método
const store = createStore(counterReducer)

//atualizando sempre que o alguna coisa é atualizada
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(decrementAction(10))

