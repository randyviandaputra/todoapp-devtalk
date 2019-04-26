import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Search from './Search'
import './TodoApp.css'

class TodoApp extends React.Component {
  constructor() {
    super()
    const data_todos = [
      {id: 1, description: 'Makan Pagi', completed: false},
      {id: 2, description: 'Makan Siang', completed: false},
      {id: 3, description: 'Makan Siang', completed: false},
    ]
    this.state = {todos: data_todos, search: ''}
    this.onAddTodo = this.onAddTodo.bind(this)
    this.onSearchTodo = this.onSearchTodo.bind(this)
  }

  onAddTodo(description) {
    let todos = this.state.todos
    todos.push({
      id: todos.length + 1,
      description: description,
      completed: false,
    })

    this.setState({todos: todos})
  }

  onSearchTodo(searchText) {
    this.setState({search: searchText})
  }

  render() {
    const {search} = this.state
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.description.toLowerCase().includes(search.toLowerCase())
    })

    return (
      <div className="todo-app">
        <h1 className="center">Todo App</h1>
        <h3 className="bold center">Total Todo : {filteredTodos.length}</h3>
        <Search onSearch={this.onSearchTodo} />
        <TodoList todos={filteredTodos} />
        <AddTodo onAdd={this.onAddTodo} />
      </div>
    )
  }
}

export default TodoApp
