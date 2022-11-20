var _name = 'Wolverine';
let _nameLet = 'Wolverine';
const _nameConst = 'Wolverien';

if (true) {
    _name = 'Hulk';
    _nameLet = 'Iron Man';
    const _nameConst = 'Thor'; //its no possible regarding is a constant - constants can have more than one declaration in two scope
    console.log(_nameConst);

}

console.log(_name);
console.log(_nameLet);
console.log(_nameConst);