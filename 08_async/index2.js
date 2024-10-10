// Promise 객체 (프로미스)
// - 비동기 함수를 동기처리하기 위해 만든 객체
// - 미래에 성공과 실패에 대한 결과 값을 "약속"한다는 의미
// - 성공, 실패 분리해서 반환
// - 성공, then, 실패 catch 메서드로 이어 받아서 처리 가능
// Pending : 대기, Fullfilled : 이행, Rejected : 거부, Settled : 결론

// 1. promise 객체 생성 코드
/*
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `현재 프로미스의 상태는 fullfilled(이행)! then 메소드로 연결~ 이 때 flag 값은 ${flag}`
      );
    } else {
      reject(
        `현재 프로미스의 상태는 rejected(거절)! catch 메소드로 연결~ 이 때 flag 값은 ${flag}`
      );
    }
  });
}

// 2. promise를 사용 하는 코드
// 화살표 함수로도 사용 가능
promise1(5 > 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 가장 마지막에 선택사항, 성공과 실패 상관없이 실행
    console.log("finally");
  });
  */

///////////////////////////////////////////
// 2. 프로미스 예제

/*
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다..");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    // 3초 기다린 후에 코드 실행 (3초 고민)
    setTimeout(function () {
      console.log("고민끝!");
      product = "제로콜라";
      price = 2000;
      resolve();
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명 : ${product}, 가격 : ${price}`);
}

let product;
let price;
goMart();
pickDrink().then(() => {
  pay(product, price);
});
// pay(product, price);
*/

//////////////////////////////////
// 3. 프로미스 체이닝
// Promise 체이닝 사용 안한 경우
// 함수를 이용해서 (4 + 3) * 2 - 1
// add -> mul -> sub

/*
function add(n1, n2, cb) {
  setTimeout(function () {
    let result = n1 + n2; // 7
    cb(result); // callback(7)
  }, 1000);
}

function mul(n, cb) {
  setTimeout(function () {
    let result = n * 2; // 14
    cb(result); // callback(14)
  }, 700);
}

function sub(n, cb) {
  setTimeout(function () {
    let result = n - 1; // 13
    cb(result); // callback(13)
  }, 500);
}

add(4, 3, function (x) {
  console.log("1: ", x); // 7
  mul(x, function (y) {
    console.log("2: ", y); // 14
    sub(y, function (z) {
      console.log("3: ", z); // 13
    });
  });
});
*/

/*
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2; // 7
      resolve(result); // resolve(7)
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2; // 14
      resolve(result); // resolve(14)
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1; // 13
      // resolve(result); // resolve(13)
      reject(new Error("의도적으로 발생시킨 에러!"));
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1: ", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2: ", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3: ", result);
  })
  .catch((error) => {
    console.log(error);
  });
  */

// 실습1. Callback -> Promise

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

call("kim")
  .then(function (name) {
    console.log(name + "반가워");
    return back();
  })
  .then(function (txt) {
    console.log(txt + "을 실행했구나!");
    return hell();
  })
  .then(function (message) {
    console.log("여기는 " + message);
  });
