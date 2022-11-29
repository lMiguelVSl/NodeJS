const employees = [
    {
        id: 1,
        nombre: 'Miguel'
    },
    {
        id: 2,
        nombre: 'Mateo'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

const salary = [
    {
        id: 1,
        salary: 1500
    },
    {
        id: 2,
        salary: 2000
    }
];

const getEmployee = (id) => {
    const promise = new Promise((resolve, reject) => {
        const Employee = employees.find(x => x.id === id)
        return Employee ? resolve(Employee) : reject(`The employee with id: ${id} does not exists`);
    })
    return promise;
}

const getSalary = (id) => {
    const promise = new Promise((resolve, reject) => {
        const Salary = salary.find(x => x.id === id)
        return Salary ? resolve(Salary) : reject(`The salary with id: ${id} does not exists`);
    })
    return promise;
}

const id = 2;

const getInfoUser = async (id) => {
    
    const employee = await getEmployee(id);
    const salary = await getSalary(id);

    return `The employee ${employee} have a salary: ${salary}`;
}


getInfoUser(id)
.then(msg => console.log(msg))
.catch(err => console.log(err))