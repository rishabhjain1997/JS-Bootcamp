const todos = [{ completed: false, text: 'Walk the dog' },
    { completed: false, text: 'brush teeth' },
    { completed: true, text: 'Call girlfriend' },
    { completed: false, text: 'Call sidegirl' }
]

const deleteTodo = function(todos, deleteText) {
    index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() == deleteText.toLowerCase()
    })
    console.log('Deleting index: ' + index)
    if (index >= 0) {
        todos.splice(index, 1)
    }


}

const getThingsToDo = function(todos) {
    return todos.filter(function(todo) {
        return !todo.completed
    })

}

const sortTodos = function(todos) {
    return todos.sort(function(a, b) {
        if (a.completed && !b.completed) {
            return -1
        }

        if (b.completed && !a.completed) {
            return 1
        } else { return 0 }
    })
}



sortTodos(todos)
console.log(todos)