
import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
function handleTodoClick() {
    toggleTodo(todos.id)
}

  return (
    todos.map(todo => {
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} onChange={handleTodoClick}/>
    })
  )
}
