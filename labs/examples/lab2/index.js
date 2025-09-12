//Promise
function myAsyncFunction(a) {
    const myPromise = new Promise((resolve, reject) => {
        if(a > 50){
            const result = {
                status: true,
                data: 'Some data',
                info: 'Additional info'
            }
            //resolve('Promise resolved successfully!');
            resolve(result);
        }else {
            reject('Promise rejected!');
        }
    })

    return myPromise;
}


// myAsyncFunction(100).then((message) => {
//     console.log(message);
// }, (error) => {
//     console.log(error);
// });

// myAsyncFunction(30)
//     .then((message) => {
//         console.log('Second then: ' + message);
//     })
//     .catch((error) => {
//         console.log('Catch: ' + error);
//     })
//     .finally(() => {
//         console.log('Finally executed');
//     });


//Chaining
// myAsyncFunction(70)
//     .then((message) => {
//         console.log('Third then: ' + message);
//         return 'Data from third then';
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log('Catch: ' + error);
//     });


//Parallel execution
Promise.all([
    myAsyncFunction(80),
    myAsyncFunction(60),
    myAsyncFunction(90)
]).then((messages) => {
    console.log('Promise.all resolved: ', messages);
}).catch((error) => {
    console.log('Promise.all rejected: ', error);
});