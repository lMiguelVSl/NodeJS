import readLine from 'readline';

const pause = async() => {

    return new Promise( resolve => {
        const readline = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPress ${'ENTER'.green} to continue\n`, opt => {
            readline.close()
            resolve()
        })
    })

}

export {
    pause
}
