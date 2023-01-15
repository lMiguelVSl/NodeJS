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

    tasksCompleteList() {
        this.getListArr().forEach((task, i) => {
            const idx = `${i + 1}`.green;
            const { Desc, CompletedOn } = task;
            const state = (CompletedOn) ? 'Completed'.green : 'Pending'.red;
            console.log(idx, Desc, '::', state);
        })
    }

    completeOrPendingTasks(isCompleted = true) {
        let state, cont = 0;
        this.getListArr().forEach((task, i) => {
            const { Desc, CompletedOn } = task;
            if (isCompleted) {
                if (CompletedOn) {
                    cont += 1;
                    state = 'Completed'.green;
                    console.log(cont.toString().green, Desc, '::', state);
                }
            } else {
                if (!CompletedOn) {
                    cont += 1;
                    state = 'Pending'.red;
                    console.log(cont.toString().green, Desc, '::', state);
                }
            }
        })
    }

}

export { Tasks };