interface Todo {
    text: string;
    isAlert: boolean;
}

interface User {
    name: string;
    isDeleted: boolean;
    todos: Todo[];
}

var users: User[] = [
    {
        name: "user 1",
        isDeleted: false,
        todos: [
            { text: "todo 1", isAlert: false },
            { text: "todo 2", isAlert: true },
            { text: "todo 3", isAlert: true },
            { text: "todo 4", isAlert: true },
        ],
    },
    {
        name: "user 2",
        isDeleted: true,
        todos: [
            { text: "todo 5", isAlert: true },
            { text: "todo 6", isAlert: false },
            { text: "todo 7", isAlert: true },
            { text: "todo 8", isAlert: false },
        ],
    },
    {
        name: "user 3",
        isDeleted: false,
        todos: [
            { text: "todo 9", isAlert: false },
            { text: "todo 10", isAlert: false },
            { text: "todo 11", isAlert: true },
            { text: "todo 12", isAlert: false },
        ],
    },
];


const results = users
    .map(user => user.todos.map(todo => { return { user, todo } }))
    .flatMap(userTodos => userTodos)
    .filter(userTodo => !userTodo.user.isDeleted && userTodo.todo.isAlert)
    .map(item => `${item.user.name}: ${item.todo.text}`);

results.forEach(item => {
    console.log(item);
});

/*
let message = "";
users.map(user => {
    if (user.isDeleted) {
        return;
    }
    user.todos.map(todo => {
        if (todo.isAlert) {
            message += `${user.name}, ${todo.text}`;
        }
    })
});

const messages = [];
for (let userIndex = 0; userIndex < users.length; ++userIndex) {
    const user = users[userIndex];
    if (user.isDeleted) {
        continue;
    }
    for (let todoIndex = 0; todoIndex < user.todos.length; ++todoIndex) {
        const todo = user.todos[todoIndex];
        if (todo.isAlert) {
            messages.push({ user, todo });
        }
    }
}
*/
