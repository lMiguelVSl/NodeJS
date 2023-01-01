require('colors');

const showMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('================'.green);
        console.log('Select an option'.green);
        console.log('================\n'.green);

        console.log(`1. Create task`);
        console.log(`2. Task list`);
        console.log(`3. Completed tasks list`);
        console.log(`4. Pending tasks list`);
        console.log(`5. Complete task`);
        console.log(`0. Exit`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Select an option:', (opt) => {
            resolve(opt);
            readLine.close();
        })
    })

}

const pause = () => {

    return new Promise( resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPress ${'ENTER'.green} to continue\n`, opt => {
            readLine.close()
            resolve()
        })
    })

}

module.exports = {
    showMenu,
    pause
}
