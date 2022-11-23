
const employees = [
    {
        id:1,
        nombre: 'Miguel'
    },
    {
        id:2,
        nombre: 'Mateo'
    },
    {
        id:3,
        nombre: 'Juan'
    }
];

const salary = [
    {
        id:1,
        salary: 1500
    },
    {
        id:2,
        salary:2000
    }
];

const getEmployee = ( id, callback ) => {
    const Employee = employees.find(x => x.id === id)
    return Employee ? callback(null, Employee) : callback(`Employee with id ${id} does not exist`);
}

const getSalary = ( id, callback ) => {
    const Salary = salary.find(x => x.id === id)
    return Salary ? callback(null, Salary) : callback(`Salary with id ${id} does not exist`);
}

const id = 1;
getEmployee( id, ( err, Employee) => {
    if(err) {
        console.log('ERROR!');
        return console.log(err);
    }

    console.log('USER EXISTS');
    console.log(Employee);
})

getSalary( id, ( err, Salary) => {
    if(err) {
        console.log('ERROR!');
        return console.log(err);
    }

    console.log('SALARY EXISTS');
    console.log(Salary);
})