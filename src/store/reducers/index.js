import { combineReducers } from 'redux'

import hardware from './reducerHardware'
import pecas from './reducerCarShop'

export default combineReducers({
    //  Nosso reducer é colocado dentro de um objeto
    hardware,

    pecas
})