"use strict";
//Função Callback normal
function esperarCallback(callback) {
    setTimeout(() => {
        callback('3s depois do callback');
    }, 3000);
}
esperarCallback(function (result) {
    console.log(result);
});
//Função usando Promise
function esperarPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois da promise');
        }, 3000);
    });
}
esperarPromise()
    .then(data => console.log(data));
//Requisição assíncrona usando Promise
fetch('https://api.github.com/users/joaogkvalho')
    .then(res => res.json())
    .then(user => user.name)
    .then(userName => console.log(userName));
