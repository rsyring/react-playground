import {observable, computed, reaction} from 'mobx';
import TodoModel from '../models/TodoModel'
import * as Utils from '../Utils';


export default class TodoStore {
    @observable todos = [];

    @computed get activeTodoCount() {
        return this.todos.reduce(
            (sum, todo) => sum + (todo.completed ? 0 : 1),
            0
        )
    }

    @computed get completedCount() {
        return this.todos.length - this.activeTodoCount;
    }

    createTodo (title) {
        var todo = new TodoModel(this, Utils.uuid(), title, false);
        this.todos.push(todo);
        return todo;
    }

}
