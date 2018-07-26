import {createStore, applyMiddleware} from 'redux'
import thuck from 'redux-thunk';
import reducer from './reducers/todo'

export default createStore(
    reducer,
    applyMiddleware(thuck)
)