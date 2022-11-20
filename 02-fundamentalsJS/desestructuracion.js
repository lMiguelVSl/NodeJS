
const deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    power: 'Fly',
    getName() {
        return `${ this.name } ${ this.lastName } can ${ this.power }`;
    }
}

const {name: _name, lastName, power} = deadpool;

console.log(' directly from object', _name);
console.log(deadpool.getName());
console.log(deadpool.getName());

const destructuring = ({ name: _name, lastName, power, age = 0}) => { // object as parameter
    console.log(_name, lastName, power, age);
}

destructuring(deadpool);

const heros = ['Deadpool', 'Hulk', 'Super Man'];
const [ , h2, h3] = heros; //array destructuring

console.log(h2,h3);