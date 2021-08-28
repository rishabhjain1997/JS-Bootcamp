'use strict'


const todos = getSavedTodos()

filters = {
    searchText: '',
    hideCompleted: false
}




renderTodos(todos, filters)
document.querySelector('#search-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value
        //console.log(filters.searchText)
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    let todoText = e.target.elements.todoText.value
    todos.push({ completed: false, text: todoText, id: uuidv4() })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''

})


document.querySelector('#toggle-completed').addEventListener('change', (e) => {
    filters.hideCompleted = (e.target.checked)
    renderTodos(todos, filters)

})