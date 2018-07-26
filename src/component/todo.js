import React,{Component} from 'react';
import {connect} from 'react-redux';
import {updateCurrent,addTodo} from '../reducers/todo';

class TodoForm extends Component {
    //update input value to todocurrent store value
    handelInputChange = (evt) => {
        console.log(this.props)
        const val = evt.target.value
        this.props.updateCurrent(val)

    }

    //add current value to todo list
    handelSubmit = (evt) => {
        
        evt.preventDefault()
        this.props.addTodo(this.props.currentTodo)
    }
    render(){
        return (
            <div className="Todo-app">
            <form onSubmit={this.handelSubmit}>
                <input 
                type="text" 
                value={this.props.currentTodo} 
                onChange={this.handelInputChange}/>
            </form>
            </div>
        )
    }
    

}

export default connect((state)=>
    (
        {// store to props mapping
        currentTodo: state.currentTodo,
        todos:state.todos
        }
    ),
    { // action call
        updateCurrent,
        addTodo
    }
)
(TodoForm)
