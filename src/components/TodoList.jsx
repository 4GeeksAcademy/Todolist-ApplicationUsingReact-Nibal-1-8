import React, { useState, useEffect } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos))
      } catch (error) {
        console.error('Error loading todos:', error)
      }
    }
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: input.trim(),
        completed: false
      }
      setTodos([...todos, newTodo])
      setInput('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const itemsLeft = todos.filter(todo => !todo.completed).length

  return (
    <div className="w-full max-w-2xl">
      {/* Title */}
      <h1 className="text-6xl font-light text-gray-300 text-center mb-8 tracking-widest">todos</h1>

      {/* Main Card */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Input Section */}
        <div className="p-6 border-b border-gray-200">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={addTodo}
            placeholder="What needs to be done?"
            className="w-full px-4 py-3 text-lg text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
          />
        </div>

        {/* Todos List */}
        <div className="divide-y divide-gray-200">
          {todos.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <p className="text-lg">✨ No todos yet. Add one to get started!</p>
            </div>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleComplete(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))
          )}
        </div>

        {/* Footer with Counter */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-light">
            {itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left
          </p>
        </div>
      </div>
    </div>
  )
}

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors duration-200 group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        className="w-5 h-5 text-blue-500 rounded cursor-pointer accent-blue-500 flex-shrink-0"
      />

      {/* Todo Text */}
      <span
        className={`flex-1 text-lg transition-all duration-200 ${
          todo.completed
            ? 'line-through text-gray-400'
            : 'text-gray-700'
        }`}
      >
        {todo.text}
      </span>

      {/* Delete Button - Shows on Hover */}
      {isHovering && (
        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex-shrink-0 text-xl font-light"
          aria-label="Delete todo"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default TodoList