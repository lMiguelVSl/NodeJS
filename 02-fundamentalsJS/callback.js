
setTimeout(() => {
    console.log('Hello Word');
}, 1000);

const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Miguel'
    }

    setTimeout(() => {
        callback(user);
    }, 1500);
}

getUserById(10, ( user ) => {
    console.log(user);
});