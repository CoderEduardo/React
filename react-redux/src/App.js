import React from 'react'
import Header from './componentes/Headar'
import Contador from './componentes/Contador'
import { createStore, combineReducers } from 'redux'
import ContadorReducer from './reducers/ContadorReducers'
import { Provider } from 'react-redux'

function App() {

    const allReducers = combineReducers({
        counter: ContadorReducer
    })
    const store = createStore(allReducers)

    return (
        <div>
            <Provider store={store}>
                <Header></Header>
                <Contador></Contador>
            </Provider>
        </div>
    )
}

export default App 