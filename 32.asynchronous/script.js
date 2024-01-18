//Promise() 
//매개변수로 실행함수 받기
//두가지 함수 받아야하는데
//첫번쨰 함수는 비동기 작업 성공시 결과 값 반환할 때
//두번째 함수는 작업 실패로 원인 반환할때 


// function fetchData() {
//     return new Promise((resolve, reject) => {
//         const success = false;

//         if (success) {
//             resolve('성공');
//         } else {
//             reject('실패');
//         }
//     })
// }

// fetchData()
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

//실제로 비동기받기
//fetch는 promise 가능 해서 바로 링크 받아옴
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response1 => response1.json())
//     .then(json => console.log(json))
//     .then(() => fetch('https://jsonplaceholder.typicode.com/todos/2'))
//     .then(response2 => response2.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))
//     .finally(() => console.log('----모든 작업 끝----'))



//promise.all()
//3개가 다 fullfill해야 사용가능

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });


//promise.race()
//가장 먼저 완료된 결과값으로 답이 나온다.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
});
// Expected output: "two"



//async await 으로 사용
//비동기 요청이지만 동기처럼 해결
//가독성이 더 좋다.(then this 보다)
//await 은 async 함수내부에서만 사용가능
async function makeRequest() {
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse1 = await response1.json();
        console.log('jsonResponse1', jsonResponse1);

        const response2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
        const jsonResponse2 = await response2.json();
        console.log('jsonResponse2', jsonResponse2);
    } catch (error) {
        console.log('error', error);
    } finally {
        console.log('---모든 작업 끝---');
    }
}

makeRequest();