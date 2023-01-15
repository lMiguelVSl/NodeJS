import { Task } from './task.js';

class Tasks {
    _list = {}

    getListArr() {
        const list = [];
        Object.keys(this._list).forEach(key => list.push(this._list[key]));
        return list;
    }

    constructor() {
        this._list = {}
    }

    uploadTasks(tasks = []) {
        tasks.forEach(task => this._list[task.Id] = task);
    }

    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.Id] = task;
    }
}

export { Tasks };