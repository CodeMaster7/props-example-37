import React, { Component } from 'react';
import Todo from './components/Todo'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      todoList: ['learn props', 'do more react']
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }
  addTodo() {
    this.setState({
      todoList: [...this.state.todoList, this.state.userInput],
      userInput: ''
    })
  }

  removeItem(index) {
    let updatedArray = this.state.todoList.filter( (todo, i) => {
      return index !== i;
    })
    this.setState({
      todoList: updatedArray
    })
  }

  render() {
    let todos = this.state.todoList.map( (todo, index) => {
      return <Todo 
                key={index} 
                item={todo} 
                deleteFn={this.removeItem}
                itemIndex={index}
              />
    })
    return (
      <div className="App">
        <h1>Joe's To-do App</h1>
        <input 
          value={this.state.userInput} 
          onChange={this.handleChange}/>
        <button onClick={this.addTodo}>Add</button>

        {todos}
        
      </div>
    );
  }
}

export default App;
