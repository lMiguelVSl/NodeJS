require('colors');

const { showMenu, pause } = require('./helpers/messages')

console.clear();

const main = async () => {
    console.log('Hello');

    let opt = '';

    while (opt !== '0') {
        opt = await showMenu();
        console.log('opt', { opt });
        await pause();

    }
}

main();