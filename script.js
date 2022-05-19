let files = document.querySelectorAll(".file");

let promise1 = new Promise((resolve, reject) => {
    let span = document.createElement("span");
    span.innerText = "Waiting..."
    files[0].appendChild(span)
    let delay = Math.round(Math.random() * 4);
    setTimeout(() => {
        let num = Math.random()
        span.remove()
        num > 0.5 ? resolve("We have received the data") : reject("Failed to retrieve data")
    }, delay *1000);
});

let promise2 = new Promise((resolve, reject) => {
    let span = document.createElement("span");
    span.innerText = "Waiting..."
    files[1].appendChild(span)
    let delay = Math.round(Math.random() * 4);
    setTimeout(() => {
        let num = Math.random()
        span.remove()
        num > 0.5 ? resolve("We have received the data") : reject("Failed to retrieve data")
    }, delay *1000);
});

let promise3 = new Promise((resolve, reject) => {
    let span = document.createElement("span");
    span.innerText = "Waiting..."
    files[2].appendChild(span)
    let delay = Math.round(Math.random() * 4);
    setTimeout(() => {
        let num = Math.random()
        span.remove()
        num > 0.5 ? resolve("We have received the data") : reject("Failed to retrieve data")
    }, delay *1000);
});

promise1.then(res => files[0].innerHTML += res).catch(res => files[0].innerHTML += res);
promise2.then(res => files[1].innerHTML += res).catch(res => files[1].innerHTML += res);
promise3.then(res => files[2].innerHTML += res).catch(res => files[2].innerHTML += res);