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
    return new Promise((resolve, reject) => {

        const Employee = employees.find(x => x.id === id).nombre;
        (Employee) 
        ? resolve(Employee) 
        : reject(`The employee with id: ${id} does not exists`);
        
    })
}

const getSalary = (id) => {


    return new Promise((resolve, reject) => {

        const Salary = salary.find(x => x.id === id).salary;
        (Salary) 
        ? resolve(Salary) 
        : reject(`The salary with id: ${id} does not exists`);

    })

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