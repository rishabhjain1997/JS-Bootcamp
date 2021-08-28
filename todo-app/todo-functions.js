'use strict'

//Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')
    try { return ((todoJSON !== null) ? JSON.parse(todoJSON) : []) } catch (e) { return [] }
}

//Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !todo.completed || !filters.hideCompleted

        return searchTextMatch && hideCompletedMatch

    })

    document.querySelector('#todos').innerHTML = ''
    todoSummaryEl = generateSummaryDOM(filteredTodos)
    document.querySelector('#todos').appendChild(todoSummaryEl)



    filteredTodos.forEach((todo) => {
        const todoEl = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(todoEl)
    })
}

// Remove todo element by ID
removeTodo = (todoId) => {
        index = todoIndex(todoId)

        if (index > -1) {
            todos.splice(index, 1)
        }
    }
    // Get index of todo by id
const todoIndex = (todoId) => todos.findIndex((todo) => (todoId === todo.id))


// Toggle the completed value for a given todo
const toggleTodo = (todoId, isCompleted) => {
    index = todoIndex(todoId)

    if (index > -1) {
        todos[index].completed = isCompleted
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const textEl = document.createElement('span')
    const todoEl = document.createElement('div')
    const removeButton = document.createElement('button')
    const checkbox = document.createElement('input')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.id, e.target.checked)
        saveTodos(todos)
        renderTodos(todos, filters)
    })


    // Setup the todo text
    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    // Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', (e) => {

        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (todos) => {
    const incompleteTodos = todos.filter((todo) => !todo.completed)
    const summaryEl = document.createElement('p')
    summaryEl.textContent = `You have ${incompleteTodos.length} todos left`
    return summaryEl
}