import {observable} from 'mobx';

export default class TodoModel {
    store;
    id;
    @observable title;
    @observable completed;

    constructor(store, id, title, completed) {
        this.store = store;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    setTitle(title) {
        this.title = title;
    }
}
