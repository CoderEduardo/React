//Criando um objeto para atribuir uma ação
const incrementAction = (value = 1) => {
    return { type: "INCREMENT", payload: value }
}
const decrementAction = (value = 1) => {
    return { type: "DECREMENT", payload: value }
}

module.exports = {
    incrementAction,
    decrementAction
}