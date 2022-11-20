console.log('Program start');

setTimeout(() => {
    console.log("First Time out");
}, 3000);

setTimeout(() => {
    console.log("Second Time out");
}, 0);

setTimeout(() => {
    console.log("Third Time out");
}, 0);

console.log('Program End');