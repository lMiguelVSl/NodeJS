import { Task } from './task.js';

class Tasks {
    _list = {}

    constructor() {
        this._list = {}
    }

    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.Id] = task;
    }
}

export { Tasks };