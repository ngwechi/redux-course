import {getTodos,createTodo} from '../lib/datasource'

const initState = {
    todos:[],
    currentValue:'temp'
}

const INIT_TODO = 'INIT_TODO'
const ADD_TODO = 'ADD_TODO'
const UPDATE_CURRENT = 'UPDATE_CURRENT'

export const updateCurrent = (val)=>(
    {type:UPDATE_CURRENT,payload:val}
)

export const addTodo = (val) =>(
    {type:ADD_TODO,payload:val}
)

// load data to store
export const loadTodo = (val) => (
    {type:INIT_TODO,payload:val}
)

// get data from api
export const fetchTodos = ()=> {
    return (dispatch) => {
        getTodos()
        .then(todos=> {
            dispatch(loadTodo(todos))
        })
    }
}

export const postTodo = (todo) => {
    return (dispatch)=> {
        console.log('post todo',todo)
        createTodo(todo)
        .then(todo=>{
            dispatch(addTodo(todo))
        })
    }
}

export default (state = initState, action)=> {
    
    switch (action.type) {
        case INIT_TODO:
            return {...state, todos: action.payload}
        case ADD_TODO:
            return { ...state, todos: state.todos.concat(action.payload)}
        case UPDATE_CURRENT:
            return {...state, currentValue: action.payload}
        
        default:
            return state;
    }
}