import {v4 as uuidv4} from 'uuid';

class Task {
    Id = '';
    Desc = '';
    CompletedOn = null;

    constructor(desc) {
        this.Id = uuidv4();
        this.Desc = desc;
        this.CompletedOn = null;
    }
}

export { Task };