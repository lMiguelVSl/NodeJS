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
const id = 3;
let _name;
getEmployee(id)
    .then(employee => {
        _name = employee;
        return getSalary(id);
    })
    .then(salary => console.log('The employee', _name, 'have a salary of:', salary))
    .catch(err => console.log(err));