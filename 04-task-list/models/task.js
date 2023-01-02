import uuid from 'uuid';

class Task {
    Id = '';
    Desc = '';
    CompletedOn = null;

    constructor(desc) {
        this.Id = uuid.v4();
        this.desc = desc;
        this.CompletedOn = null;
    }
}

export { Task };