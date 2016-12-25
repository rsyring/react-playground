import TodoStore from "./TodoStore"

describe("TodoStore", () => {
    it("creates new todos", () => {
        const store = new TodoStore();
        store.createTodo("todo1");
        store.createTodo("todo2");
        expect(store.todos.length).toBe(2);
        expect(store.todos[0].title).toBe("todo1");
        expect(store.todos[1].title).toBe("todo2");
    }),

    it("counts active todos", () => {
        const store = new TodoStore();
        store.createTodo("todo1");
        var todo = store.createTodo("todo2");
        todo.completed = true;
        expect(store.activeTodoCount).toBe(1);
    })
})
